const express = require("express");
const router = express.Router();
const UrlShortner = require('../models/UrlShortner');


//GET route
router.get('/',(req,res)=>{
    res.render('index')
})


//POST route
router.post('/shortUrls', async(req,res)=>{
    //res.json('this is ok')
    const urlShort = new UrlShortner();
    urlShort.longUrl=req.body.longUrl;
    try {
        urlShort= await urlShort.save();
        console.log('LongUrl is saved to db', urlShort)
        res.redirect('/');
    } catch (error) {
        res.render('index');
        console.log('Unable to store the data', error)
    }

})
module.exports=router;