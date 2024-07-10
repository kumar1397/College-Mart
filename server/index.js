const express = require("express")
const app = express();
const cors = require("cors");
require('dotenv').config()

const user = require('./routes/user')
const formdata = require('./routes/formdata')
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin:"*",
        methods:['GET','POST','UPDATE','DELETE']
    })
)
//parsing data
app.use(express.json());
//connection with db
const dbConnect = require("./config/database");
dbConnect();


const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));
//importing routes and mount

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

app.use("/",user);
app.use("/upload",formdata)




//listening to port
app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})
app.get('/',(req,res)=>{
    res.send( `<h1>hello</h1>`)
})