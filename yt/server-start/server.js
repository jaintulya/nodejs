const express = require("express");

const app = express(); //server instace create krrha hai(server create krna not start)

app.get("/", (req, res) => {
  res.send("hello world");    
});   //

app.get("/about", (req, res) => {
  res.send("about me ");
});

app.get("/trial",(req,res)=>{
  res.send("trail and error ")
})

app.listen(3000); //server ko start krne ke liye
