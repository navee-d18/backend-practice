const express = require("express");
const app = express();
const port = 3000;

app.set("view engine" , "ejs");
app.get("/users" , (req,res) => {
    let users = ["Ali", "Ahmed", "Sara", "Zoya"];
    res.render("loop",{users})
});

app.listen(port , () => {
    console.log("port working on port number" ,`${port}`);
});