const router = require('express').Router();  //router method is being called
const User = require('../models/User');
const Post = require('../models/Post');

const bcrypt = require('bcrypt');

//UPDATE
router.put("/:id", async(req, res)=>{               //used user id to find the user and update them on that basis
    if(req.body.userId=== req.params.id){
     if(req.body.password){
        const salt = await  bcrypt.genSalt(10);
        req.body.password= await bcrypt.hash(req.body.password, salt);
     }
    try{
      const updatedUser= await User.findByIdAndUpdate(req.params.id,{
        $set: req.body,
      },{
        new:true                         //using this the updated one will be shown in postman only
      });

      res.status(200).json(updatedUser);
      
        } catch(err){
            res.status(500).json(err);
             }
    }
     else {
        res.status(401).json("you can update your account only");  //401 means you r not allowed
   
     }
});


//DELETE
router.delete("/:id", async(req, res)=>{               //used user id to find the user and update them on that basis
    if(req.body.userId=== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            if(user){
                try{
                    await Post.deleteMany({username:user.username}); //this will help in deleting all his posts too
                    await  User.findByIdAndDelete(req.params.id);
                    res.status(200).json("user been deleted");
                }
                catch(err){
                    res.status(500).json(err);
                }
            }
        
        
    }
        catch(err){
            res.status(401).json("user  not found")
        }
    }
     else {
        res.status(401).json("you can delete your account only");  //401 means you r not allowed
   
     }
});




//GET A USER::--
router.get("/:id",async(req, res)=>{
try{
const user =await User.findById(req.params.id);
const{password, ...others}= user._doc;
res.status(200).json(others);
}catch(err){
    res.status(500).json(err);
}
})


module.exports = router;


