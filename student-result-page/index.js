const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));
app.use(express.static(path.join(__dirname , "public")));

app.get("/students" , (req,res) => {
    let students = [
        {
            names : "Alice",
            marks : 75
        },
        {
            names : "Bob",
            marks : 35
        },
        {
            names : "Charlie",
            marks : 56
        },
        {
            names : "Don",
            marks : 28
        }
    ];
    res.render("marks" , {students});
});

app.listen(port , () => {
    console.log(`port is working on port number ${port}`);
});