const express = require("express");
const router = express.Router();
const UrlShortner = require('../models/UrlShortner');

 
//GET route(/) to get all the saved data...
router.get('/', async(req,res)=>{
    try {
        const data= await UrlShortner.find({}).sort({createdAt:'-1'});
        //console.log(data)
         res.render('index',{
        urlShortners:data
    })
    } catch (error) {
        console.log("There is an error to get data", error);
        res.json('Opps! unable to get the data from database')
    }  
})

//POST route (/shortUrls) to store Long Url to db...
router.post('/shortUrls', async(req,res, next)=>{
     try {
        const duplicate= await UrlShortner.findOne({longUrl:req.body.longUrl});
        if(duplicate) return(
            console.log("Already exit url"),
            res.redirect('/')
        ) 
        const urlShort = new UrlShortner();
        urlShort.longUrl=req.body.longUrl;
        await urlShort.save();
        console.log('LongUrl is saved to db')
        res.redirect('/');
    } catch (error) {
        res.render('index');
        console.log('Unable to store the data', error)
    }

})

//GET route to shourturl params...
router.get('/:shortUrl', async(req,res)=>{
    const shortUrl= await UrlShortner.findOne({shortUrl: req.params.shortUrl});
    if(!shortUrl) return res.sendstatus(404);
   
    try { 
        shortUrl.clicks++
        await shortUrl.save();
        res.redirect(shortUrl.longUrl);
    } catch (error) {
        console.log(error)
    }
    

})
module.exports=router;