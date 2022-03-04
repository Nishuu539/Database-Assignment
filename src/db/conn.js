const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/LumiqEmployees",{
    useNewUrlParser:true,
     useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfully established")
}).catch((e)=>{
    console.log("connection Error");
});