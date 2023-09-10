const router = require('express').Router();  //router method is being called
const User = require('../models/User')
const bcrypt = require('bcrypt');

//Register{ creating: Post method, updating: put method, deleting: delete method, fetching: get method}
router.post("/register", async(req, res)=>{
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt );  // we have hashed the pass with salt 
   const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:hashedPass,
   });
   const user = await newUser.save();    //save method is being provided by mongoose through user module
   return res.status(200).json({
    success: true,
    data: user
  })    
} catch(err){
     res.status(500).json(err);
    }
});



//Login
router.post("/login", async(req, res)=>{
try{
const user = await User.findOne({username : req.body.username})
!user&&res.status(400).json("wrong credentials");

const validated = await bcrypt.compare(req.body.password, user.password)
!validated && res.status(400).json("wrong credentials");

const{password, ...others}=user._doc;     //did this because everything in doc be sent but user password.
res.status(200).json(others);
}

catch(err){
res.status(500).json(err);
}
});

module.exports = router