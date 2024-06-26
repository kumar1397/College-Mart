const express = require("express")
const app = express();
const cors = require("cors");
require('dotenv').config()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin:"http://localhost:3001",
        methods:['GET','POST','UPDATE','DELETE']
    })
)

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
app.get('/',(req,res)=>{
    res.send( `<h1>hello</h1>`)
})