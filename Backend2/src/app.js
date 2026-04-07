const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/login",(req,res)=>{
    res.send("<h1>Hello! Welcome to Hitesh Chaudhary Youtube channel!</h1>");
})

module.exports = app;