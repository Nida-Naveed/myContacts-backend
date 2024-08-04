const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//body parser
app.use(express.json());
//handle get request
//routes folder is for handling all our routing4

//here we define path of the route in use() i.e., where the actual route is written
app.use("/api/contacts",require("./routes/contactRoutes"));

app.listen (port, ()=>{
    console.log(`Server is running on port ${port}`)
});