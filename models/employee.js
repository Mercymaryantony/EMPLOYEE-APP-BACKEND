const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
            "NAME":{type:String ,required:true},
            "CODE":{type:String,required:true},
            "ADD":{type:String,required:true},
            "dob":String,
            "img":String,
            "pass":String,
            "cpass":String
    }
)
let employeemodel =mongoose.model("employee",schema);
module.exports={employeemodel}