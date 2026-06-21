const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/",auth,async(req,res)=>{

    const post = await Post.create({
        user:req.user,
        content:req.body.content
    });

    res.json(post);
});

router.get("/",async(req,res)=>{

    const posts = await Post.find()
    .populate("user","username")
    .sort({createdAt:-1});

    res.json(posts);
});

router.put("/like/:id",auth,async(req,res)=>{

    const post =
    await Post.findById(req.params.id);

    if(!post.likes.includes(req.user)){
        post.likes.push(req.user);
    }

    await post.save();

    res.json(post);
});

router.post("/comment/:id",auth,async(req,res)=>{

    const post =
    await Post.findById(req.params.id);

    post.comments.push({
        user:req.user,
        text:req.body.text
    });

    await post.save();

    res.json(post);
});

router.delete("/:id",auth,async(req,res)=>{

    const post =
    await Post.findById(req.params.id);

    if(post.user.toString() !== req.user){
        return res.status(401).json({
            message:"Not Authorized"
        });
    }

    await post.deleteOne();

    res.json({
        message:"Deleted"
    });
});

module.exports = router;