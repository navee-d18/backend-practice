const express = require("express");
const app = express();

const port = 3000;

app.get("/contact" , (req,res) => {
    res.send("<h1>contact us</h1> <p>This is contact page</p>");
});


app.listen(port, () => {
    console.log (`port is working on port number ${port}`);
});