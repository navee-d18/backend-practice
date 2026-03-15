//Question 2

const express = require("express");
const app = express();

//Middle ware
const checkAge = (req , res , next) => {
    let { age } = req.query;
    if(age >= 18) {
        next();
    } else{
        res.send("Access Denied");
    }
}

app.get("/vote" , checkAge , (req , res) => {
    res.send("You can vote");
});

app.listen(3000 , () => {
    console.log("The server is running");
});