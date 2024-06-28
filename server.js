const express= require("express")
const dotenv=require("dotenv").config()
const sequelize=require("./config/database")
const User =require("./model/usermodel");
const userRoute=require("./routes/userRoutes")

const app = express()
app.use(express.json())

sequelize.sync({force: true}).then(()=>{
    console.log("sync database")
  
   }).catch((error)=>{
  
      console.log(error)
   })
app.use("/users",userRoute)
const port=process.env.PORT
app.get("/",(req,res)=>{
  res.send("Hello world")
})


   app.listen(port,()=>{
    console.log(`Server is running on this port ${port}`)
  
  })
