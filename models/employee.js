const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "NAME":String,
                "CODE":String,
                "ADD":String
    }
)
let employeemodel =mongoose.model("employee",schema);
module.export=(employeemodel)