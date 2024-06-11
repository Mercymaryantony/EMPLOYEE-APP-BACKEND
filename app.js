const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const {employeemodel} =require("./models/employee")
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://mercy1112:mercy1112@cluster0.8x8j3ya.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")

app.listen(8081,()=>{
    console.log("server started")
})

app.get("/view",(req,res)=>{
    employeemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.send("error")
        }
    )
   
})

app.post("/add",(req,res)=>{
    let input = req.body
    let employee = new employeemodel(input)
    console.log(employee)
    employee.save()
    res.json({"status":"ADD"})
})

app.post("/delete",(req,res)=>{
    res.send("DELETE")
})

app.post("/search",(req,res)=>{
    res.send("SEARCH")
})
