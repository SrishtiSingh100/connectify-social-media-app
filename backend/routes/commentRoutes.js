const express = require("express");

const router = express.Router();

const Comment = require("../models/Comment");

const auth = require("../middleware/authMiddleware");



// CREATE COMMENT

router.post("/:postId",auth,async(req,res)=>{


try{


const comment = await Comment.create({

post:req.params.postId,

user:req.user,

text:req.body.text

});


res.json(comment);


}

catch(error){

res.status(500).json({

message:error.message

});

}


});




// GET COMMENTS OF POST


router.get("/:postId",async(req,res)=>{


try{


const comments = await Comment.find({

post:req.params.postId

})

.populate(
"user",
"username"
);



res.json(comments);


}

catch(error){

res.status(500).json({

message:error.message

});

}


});





module.exports = router;