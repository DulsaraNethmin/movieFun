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
mongoose.connect("mongodb+srv://movieUser:movieUser123@nethmincluster99.5wvxn.mongodb.net/Moviedb?retryWrites=true&w=majority")
        .then(()=>{console.log("server connected")})
        .catch((err)=>{console.log("an error happened")});

app.use('/',movie);


if(process.env.NODE_ENV==='production')
{
    app.use(express.static('/client/build'));
    app.get("*",(req,res)=>
    {
        res.sendFile(path.resolve(__dirname,'client/build/index.html'));
    })
}




app.listen(port, ()=>
{
    console.log("server is listning");
})
