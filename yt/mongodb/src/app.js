const express= require('express');
const noteModel=require("./models/note.model")
const app =express();
app.use(express.json());


app.post("/notes", async(req,res)=>{

  const data = req.body;
  await noteModel.create({
    title:data.title,
    description:data.description
  })

  res.status(201).json({
    message:"note created"
  })
})

app.get('/notes', async (req,res)=>{
 
 const notes=await noteModel.findOne({
  title:"test_title"
 })
 res.status(200).json({
  message:"notes fetched successfully",
  notes:notes
 })
})


module.exports = app