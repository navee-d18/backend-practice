//Question 1

const express = require("express");
const app = express();

//Middleware
app.use((req , res , next) => {
    console.log("Request Received");
    next();
});

app.get("/home" , (req , res) => {
    res.send("Welcome Home");
});

app.listen(3000 , () => {
    console.log("The server is running");
});