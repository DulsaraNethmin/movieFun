const express =require("express");
const mongoose = require("mongoose");
const bodyPaser=require ("body-parser");
const cors = require("cors");
const movie= require("./route/movie");
const path = require('path');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 9000;
//middleware
app.use(bodyPaser.json());
app.use(cors());


//API routes
mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{console.log("server connected")})
        .catch((err)=>{console.log("an error happened")});

app.use('/',movie);


app.use(express.static(path.resolve(__dirname, "./client/build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
});




app.listen(port, ()=>
{
    console.log("server is listning");
})
