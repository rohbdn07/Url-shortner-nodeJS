const express = require("express");
const router = express.Router();
const UrlShortner = require('../models/UrlShortner');

 
//GET route
router.get('/', async(req,res)=>{
    try {
        const data= await UrlShortner.find({});
        console.log(data)
         res.render('index',{
        urlShortners:data
    })
    } catch (error) {
        console.log("There is an error to get data", error);
        res.json('Opps! unable to get the data from database')
    }  
})

//POST route
router.post('/shortUrls', async(req,res)=>{
    //res.json('this is ok')
    const urlShort = new UrlShortner();
    urlShort.longUrl=req.body.longUrl;
    try {
        await urlShort.save();
        console.log('LongUrl is saved to db')
        res.redirect('/');
    } catch (error) {
        res.render('index');
        console.log('Unable to store the data', error)
    }

})
module.exports=router;