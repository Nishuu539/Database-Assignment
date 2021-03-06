const mongoose= require("mongoose");

const employeeSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    age:{
        type:Number,
        required:true
    }
});

const Employee= new mongoose.model("Employee",employeeSchema);
module.exports=Employee;
