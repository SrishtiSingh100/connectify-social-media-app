import axios from "axios";
import { useEffect, useState } from "react";

import {
    FaBell,
    FaComment,
    FaFire,
    FaHeart,
    FaHome,
    FaImage,
    FaPaperPlane,
    FaShare,
    FaSmile,
    FaStar,
    FaUser,
    FaUsers,
    FaVideo
} from "react-icons/fa";


function Feed(){

const [posts,setPosts] = useState([]);

const [content,setContent] = useState("");

const [comments,setComments] = useState({});

const [commentText,setCommentText] = useState({});


const token = localStorage.getItem("token");





// GET POSTS

const getPosts = async()=>{


try{


const res = await axios.get(

"http://localhost:5004/api/posts"

);


setPosts(res.data);



res.data.forEach((post)=>{

loadComments(post._id);

});



}
catch(err){

console.log(err);

}


};






useEffect(()=>{


getPosts();


},[]);









// CREATE POST


const createPost = async()=>{


if(!content.trim()) return;



try{


await axios.post(


"http://localhost:5004/api/posts",


{

content

},


{

headers:{

token

}

}


);



setContent("");

getPosts();



}
catch(err){

console.log(err);

}



};









// LIKE POST


const likePost = async(id)=>{


try{


await axios.put(


`http://localhost:5004/api/posts/like/${id}`,


{},


{


headers:{

token

}


}


);



getPosts();



}
catch(err){

console.log(err);

}


};










// LOAD COMMENTS


const loadComments = async(postId)=>{


try{


const res = await axios.get(


`http://localhost:5004/api/comments/${postId}`


);



setComments(prev=>({


...prev,


[postId]:res.data



}));



}
catch(err){

console.log(err);


}


};









// ADD COMMENT


const addComment = async(postId)=>{


if(!commentText[postId]?.trim())

return;




try{


await axios.post(


`http://localhost:5004/api/comments/${postId}`,


{


text:commentText[postId]


},


{


headers:{


token


}


}


);




setCommentText({


...commentText,


[postId]:""



});




loadComments(postId);



}
catch(err){

console.log(err);


}


};









return(


<div className="min-h-screen bg-gray-100">





{/* NAVBAR */}


<nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">


<h1 className="text-3xl font-bold text-blue-600">

Connectify

</h1>




<div className="flex gap-8 text-xl text-gray-600">


<FaHome className="hover:text-blue-600 cursor-pointer"/>

<FaBell className="hover:text-blue-600 cursor-pointer"/>

<FaComment className="hover:text-blue-600 cursor-pointer"/>

<FaUser className="hover:text-blue-600 cursor-pointer"/>


</div>


</nav>









<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6">









{/* PROFILE */}



<div className="bg-white rounded-xl shadow p-6 h-fit">


<div className="flex flex-col items-center">


<div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl">


<FaUser/>


</div>



<h2 className="font-bold text-xl mt-3">

Srishti

</h2>


<p className="text-gray-500">

Full Stack Developer

</p>


</div>




<hr className="my-5"/>



<div className="space-y-4">


<p className="flex gap-3 items-center">


<FaUsers className="text-blue-500"/>


Followers: 120


</p>




<p className="flex gap-3 items-center">


<FaComment className="text-green-500"/>


Posts: {posts.length}


</p>




<p className="flex gap-3 items-center">


<FaStar className="text-yellow-500"/>


Creator Level


</p>



</div>


</div>













{/* MAIN FEED */}



<div className="md:col-span-2">









{/* CREATE POST */}



<div className="bg-white rounded-xl shadow p-5 mb-6">


<h2 className="text-xl font-bold mb-4">

Create Post

</h2>





<textarea


value={content}


onChange={(e)=>setContent(e.target.value)}


placeholder="What's happening?"


className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"


rows="4"


/>






<div className="flex justify-between items-center mt-4">


<div className="flex gap-5 text-xl text-gray-500">


<FaImage/>

<FaVideo/>

<FaSmile/>


</div>





<button


onClick={createPost}


className="bg-blue-600 text-white px-6 py-2 rounded-full flex gap-2 items-center hover:bg-blue-700"


>


<FaPaperPlane/>

Post


</button>



</div>


</div>














{/* POSTS */}




{

posts.length===0 &&


<div className="bg-white p-10 rounded-xl text-center shadow">


<h2 className="text-xl font-bold">

No Posts Yet

</h2>


<p className="text-gray-500">

Create the first post 🚀

</p>


</div>


}







{

posts.map((post)=>(



<div


key={post._id}


className="bg-white rounded-xl shadow p-5 mb-6"



>





<div className="flex items-center gap-4">


<div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">


<FaUser/>


</div>



<div>


<h3 className="font-bold">


{post.user?.username}


</h3>


<p className="text-sm text-gray-400">

Just now

</p>


</div>


</div>








<p className="mt-5 text-lg text-gray-700">


{post.content}


</p>






<hr className="my-4"/>






<div className="flex justify-around text-gray-600">



<button


onClick={()=>likePost(post._id)}


className="flex gap-2 items-center hover:text-red-500"


>


<FaHeart/>


{post.likes.length}


</button>






<button


onClick={()=>loadComments(post._id)}


className="flex gap-2 items-center hover:text-blue-500"


>


<FaComment/>


Comment


</button>






<button


className="flex gap-2 items-center hover:text-green-500"


>


<FaShare/>


Share


</button>



</div>









<hr className="my-4"/>





<h3 className="font-bold mb-3">

Comments

</h3>






{

comments[post._id]?.map((comment)=>(



<div


key={comment._id}


className="bg-gray-100 rounded-lg p-3 mb-2"



>


<p className="font-semibold">


{comment.user.username}


</p>


<p>


{comment.text}


</p>



</div>



))


}








<div className="flex gap-2 mt-3">


<input


placeholder="Write a comment..."


value={commentText[post._id] || ""}


onChange={(e)=>


setCommentText({


...commentText,


[post._id]:e.target.value


})


}



className="flex-1 border rounded-lg p-2"



/>





<button


onClick={()=>addComment(post._id)}


className="bg-blue-600 text-white px-4 rounded-lg"


>


<FaPaperPlane/>


</button>



</div>







</div>



))


}






</div>












{/* TRENDING */}




<div className="bg-white rounded-xl shadow p-5 h-fit">


<h2 className="font-bold text-xl mb-5 flex gap-2 items-center">


<FaFire className="text-red-500"/>


Trending


</h2>





<div className="space-y-4">


<p>#webdevelopment</p>

<p>#AI</p>

<p>#ReactJS</p>

<p>#MongoDB</p>



</div>


</div>







</div>



</div>


);


}


export default Feed;