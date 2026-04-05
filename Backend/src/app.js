//server create karna
const express = require('express')
const app =express();
const noteModel = require('./models/note.model')

app.use(express.json()) // middleware
//parse the data.


app.post("/notes",async (req,res)=>{
    const data = req.body
    await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message:"Note added succcessfully!"
    })
})

app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()  //return :data in array of objects [{},{}]
    const noteOne = await noteModel.findOne( //RETURN only one object if found
        {title:"test_title"}     
    );
    res.status(200).json(
        {
            message:"All Notes have been Fetched!",
            noteOne:noteOne,
            notes:notes
        }
    )
})
app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id:id
    });
    res.status(200).json(
        {
            message:"Id deleted succesfully!"
        }
    )
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id:id},{
        description:description
    })
    res.status(200).json({
        message:"Updated! successfully!"
    })
})


module.exports = app
