const express = require("express");
const app = express();
const port = 3000;

app.set("view engine" , "ejs");

app.get("/marks" , (req,res) => {
    let marks = 25;
    res.render("marks",{marks})
});

app.listen(port , () => {
    console.log("port working on port number" ,`${port}`);
});