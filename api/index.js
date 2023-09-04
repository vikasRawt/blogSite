const express = require('express');
const cors = require("cors")
const app = express();
const dotenv = require('dotenv');
const authRoute =require('./routes/auth');
const userRoute =require('./routes/users');
const postRoute =require('./routes/posts');
const categoryRoute =require('./routes/categories');
const multer = require('multer');

app.use(cors())
dotenv.config()
app.use(express.json());  //so that the postman api can take json data or json data be expoted from here(26:17)
const databaseConnect = require('./config/databaseConfig');
databaseConnect();

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"images");
    },
    filename: (req,file,cb)=>{
        cb(null, "hello.jpeg");           //this is gonna take our file and its gonna save inside the images and file name will be which we r providing(req.body.name);
    }, 
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded"); 
});
 
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.use('/api/posts',postRoute);
app.use('/api/categories',categoryRoute);




app.listen('5000', ()=>{
    console.log("backend is running")
});