const mongoose =require('mongoose');
const movieSchema=new mongoose.Schema(
    {
        name:{type:String},
        year:String,
        genre:String
    },
    {collection:"movie"}
    )


    module.exports = mongoose.model("Movie",movieSchema);