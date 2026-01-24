const express = require("express");
const app = express();

const port = 3000;
app.set("view engine","ejs");

app.get("/home" , (req,res) => {
    res.render("home.ejs")
});

app.listen(port,() => {
    console.log(`port working on port number ${port}`);
});