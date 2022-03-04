var express = require('express')
const router= new express.Router();
const Employee = require("../models/employees");
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.get("/", (req, res) => {
    res.render("index");
});
router.get("/nishant", (req,res)=>{
    res.send("hello Nishant");
})

router.post("/register", async (req, res) => {
    try {      
        const employee = new Employee({         
          firstName: req.body.firstName,
             lastName: req.body.lastName,
             email: req.body.email,
             gender: req.body.gender,
             mobile: req.body.mobile,
             age: req.body.age,


         });
        const registered = await employee.save();
        // console.alert("Data successfully registered");
        res.render("index");
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});


module.exports= router;