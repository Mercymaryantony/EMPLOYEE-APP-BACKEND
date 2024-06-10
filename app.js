const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const employee =require("./models/employee")
app.use(cors())

app.listen(8080,()=>{
    console.log("server started")
})

app.get("/view",(req,res)=>{
    res.send("VIEW")
})

app.post("/add",(req,res)=>{
    res.send("ADD")
})

app.post("/delete",(req,res)=>{
    res.send("DELETE")
})

app.post("/search",(req,res)=>{
    res.send("SEARCH")
})
