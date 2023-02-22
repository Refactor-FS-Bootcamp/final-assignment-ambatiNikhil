const router = require("express").Router();
const Comment = require("../models/Comment");
const verify = require("../verifyToken");

//CREATE
router.post("/" , verify , async (req , res) => {
    if(req.user.isAdmin){
        const newComment = new Comment(req.body);
        try{
            const savedComment = await newComment.save();
            res.status(200).json(savedComment);
        }catch (error) {
            res.status(500).json(err);
        }

    }else{
        res.status(403).json("You are not allowed to add comments");
    }
})

router.put("/:id" , verify , async(req,res) => {
    if(req.user.isAdmin){
        try{
            const updatedComment = await Comment.findByIdAndUpdate(
                req.params.id , { $set: req.body }, {new : true}
            );
            res.status(200).json(updatedComment)
        }catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(403).json("You are not allowed to edit the comment")
    }
})

router.delete("/:id" , verify , async (req,res) => {
    if(req.user.isAdmin){
        try {
            await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json("The comment is removed")
        } catch (error) {
            res.status(500).json(error)
        }

    }else{
        res.status(403).json("You are not authorised to delete comments");
    }
})

// router.get("/all" , verify , async (req,res) => {
//     try {
//         const comments = await Comment.find()
//         res.status(200).json(comments)
        
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

router.get("/all" , async (req,res) => {
    try {
        const comments = await Comment.find()
        res.status(200).json(comments)
        
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;