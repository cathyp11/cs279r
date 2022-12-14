const express = require("express");

const app = express();

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

//view engine configuration
app.set("view engine", "ejs");

// app.get('/',(req, res) => {
//     res.send('Hello World!');
//     });

// GET METHOD
app.get('/',(req, res) => {
    res.render('todo.ejs');
    });

// POST METHOD
app.post('/',(req, res) => {
    console.log(req.body);
    });

app.listen(3000, () => console.log("Server Up and running"));


