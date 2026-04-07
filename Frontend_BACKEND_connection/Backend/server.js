const express = require('express')
const app = express()
const cors= require('cors');

app.use(cors());
app.get('/',(req,res)=>{
    res.send("Server is ready")
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
      {
        id: 1,
        category: "Programming",
        joke: "Why do programmers prefer dark mode?",
        answer: "Because light attracts bugs.",
      },
      {
        id: 2,
        category: "Programming",
        joke: "Why do Java developers wear glasses?",
        answer: "Because they don’t see sharp.",
      },
      {
        id: 3,
        category: "General",
        joke: "Why don’t scientists trust atoms?",
        answer: "Because they make up everything.",
      },
      {
        id: 4,
        category: "Programming",
        joke: "What is a programmer’s favorite place?",
        answer: "The Foo Bar.",
      },
      {
        id: 5,
        category: "General",
        joke: "Why did the computer go to the doctor?",
        answer: "Because it caught a virus.",
      },
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Server started");
})