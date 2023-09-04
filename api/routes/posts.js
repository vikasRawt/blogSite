const router = require('express').Router();  //router method is being called
const Post = require('../models/Post');


//CREATE POST 
router.post("/", async(req, res)=>{               //used user id to find the user and update them on that basis
   const newPost = new Post(req.body);
   try{
const savedPost = await newPost.save();
res.status(200).json(savedPost);
   }
   catch(err){
    res.status(500).json(err)
   }
});


//UPDATE POST
router.put("/:id", async(req, res)=>{               //used user id to find the user and update them on that basis
   try{
    const post = await Post.findById(req.params.id);
    if(post.username===req.body.username){

        try{
        const updatePost = await Post.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new: true});
            res.status(200).json(updatePost);
         
        }
        catch(err){
     res.status(500).json(err);
        }
    }
    else{
        res.status(400).json("you can update your post only");
    }


   }
   catch(err){
    res.status(500).json(err);
   }
});




//DELETE POST::--
router.delete("/:id", async(req, res)=>{               //used user id to find the user and update them on that basis
    try{
     const post = await Post.findById(req.params.id);
     if(post.username===req.body.username){
 
         try{
            await post.delete();
             res.status(200).json("Post been deleted");
          
         }
         catch(err){
      res.status(500).json(err);
         }
     }
     else{
         res.status(401).json("you can delete your post only");
     }
 
 
    }
    catch(err){
     res.status(500).json(err);
    }
 });
 

//GET A POST::--
 router.get("/:id",async(req, res)=>{
    try{
    const post =await Post.findById(req.params.id);

    res.status(200).json(post);
    
    }catch(err){
        res.status(500).json(err);
    }
    })


    //GET ALL POST::--
 router.get("/",async(req, res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try{                                       //gonna create an array as all post bieing send
    
    let posts;                               //posts is let cause we can change it
    if(username){
         posts = await Post.find({username})   //here it is username:username means is it equal (1:1:22)
          }else if(catName){
      posts = await Post.find({categories:{           //here checking if categories equal(:) to 
      $in:[catName],                                //here $in is method to check if there is some(category) inside that is inside equal to categories 
      }});
          }
          else{
            posts = await Post.find();
          }

res.status(200).json( posts); 


    }catch(err){
        res.status(450).json(err);
    }
    })

module.exports = router;


