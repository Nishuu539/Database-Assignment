const express = require("express");
const Employee = require("./models/employees")
require("./db/conn")
const app = express();
const path = require("path");
const staticPath = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));
app.set("views", "../views");
app.set("view engine", "hbs");
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/register", async (req, res) => {
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
        console.log(e)
    }
});
app.listen(port, () => {
    console.log("Server is running at", port);
    ;
})