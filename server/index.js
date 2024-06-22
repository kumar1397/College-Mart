const express = require("express")
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 5000
//parsing data
app.use(express.json());
//connection with db
const dbConnect = require("./config/database");
dbConnect()
//importing routes and mount
const user = require('./routes/user')
app.use("/",user)

//listening to port
app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})