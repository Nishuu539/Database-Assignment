const express = require("express");
const Employee = require("./models/employees")
require("./db/conn")
const app = express();
const path = require("path");
const EmployeeRouter= require("./router/employee");
app.use(EmployeeRouter);
const staticPath = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));
app.set("views", "./views");
app.set("view engine", "hbs");
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running at", port);
    ;
})