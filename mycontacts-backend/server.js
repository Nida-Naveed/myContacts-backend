const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//body parser is this is the in-built middlware
//handle get request
//routes folder is for handling all our routing4
// 'use' is used to enable or make use of the middleware
//here we define path of the route in use() i.e., where the actual route is written
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen (port, ()=>{
    console.log(`Server is running on port ${port}`)
});