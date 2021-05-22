const Movie = require("../model/Movie");
const express =require('express');

const router =express.Router();

router.get('/',async(req,res)=>
{
    const data=await Movie.find(req.query);
    res.status(200).json(data);
})




router.get('/:id',(req,res)=>
{
    res.send(req.params.id + " is my id");
})



router.post('/',async(req,res)=>
{
    try
    {
        const movie = Movie.create(req.body);
        if(movie)
        {
            res.send("recoded");
        }
        else
        {
            res.send("Oooops, sorry");
        }
    }
    catch(err)
    {
        res.send(err);
    }
})


module.exports=router;