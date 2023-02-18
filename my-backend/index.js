const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const commentRoute = require('./routes/comments');
const Cors = require("cors")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("DB Connection is Successfull"))
        .catch(err => console.log(err));

app.use(express.json());
app.use(Cors());

app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/comments" , commentRoute);


app.listen(8800 , () => console.log("Backend Server is runninig"));