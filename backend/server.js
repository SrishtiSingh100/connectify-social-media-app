const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();



// CORS Configuration

app.use(
    cors({

        origin: true,

        methods: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],

        credentials:true

    })
);




// Middleware

app.use(express.json());






// MongoDB Connection


mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((error)=>{


    console.log("MongoDB Connection Error:");

    console.log(error.message);


});






// Test Route

app.get("/",(req,res)=>{


    res.send("Connectify Backend API Running 🚀");


});







// Routes


app.use(
"/api/auth",
require("./routes/authRoutes")
);



app.use(
"/api/posts",
require("./routes/postRoutes")
);



app.use(
"/api/comments",
require("./routes/commentRoutes")
);







// Server


const PORT = process.env.PORT || 5004;



app.listen(PORT,()=>{


    console.log(
        `Server Running on Port ${PORT}`
    );


});