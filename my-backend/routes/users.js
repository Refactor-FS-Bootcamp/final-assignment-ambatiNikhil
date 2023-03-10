const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//Update User
router.put("/:id" , verify , async(req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id , { $set : req.body } , {new : true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(403).json("You are not authorised to update other users");
    }
})

//DeleteUser
router.delete("/:id" , verify , async (req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(403).json("You are not authorized to delete other users account");
    }
})

//GET User
router.get("/find/:id" , async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password , ...other} = user._doc;
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL
router.get("/" , verify , async(req,res) => {
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const users = query ? 
            await User.find().sort({_id : -1}).limit(3) : 
            await User.find();
            res.status(200).json(users);
        }catch (error){
            res.status(500).json(error);
        }
    }else{
        res.status(403).json("You are not authorized to see all users");
    }
})
module.exports = router;