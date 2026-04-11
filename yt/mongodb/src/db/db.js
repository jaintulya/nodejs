const mongoose = require("mongoose");
async function  connectDB(){
  await mongoose.connect("mongodb+srv://tulya:AWtQxD5V8cGct0BT@cluster0.7hysmwm.mongodb.net/learning")

  console.log("Connected to DB")
}
module.export=connectDB

