//url_index, url_shorturls_post, url_get_shorturl, url_delete

const UrlShortner = require('../models/UrlShortner');

const url_index= async(req,res)=>{
    try {
        const data= await UrlShortner.find({}).sort({createdAt:'-1'});
        if(!data) return res.redirect('/');
        //console.log(data)
         res.render('index',{
        urlShortners:data
    })
    } catch (error) {
        console.log("There is an error to get data", error);
        res.json('Opps! unable to get the data from database')
    }  
}

const url_shorturls_post= async(req,res, next)=>{
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
}

const url_get_shorturl= async(req,res)=>{
    const shortUrl= await UrlShortner.findOne({shortUrl: req.params.shortUrl});
    if(!shortUrl) return res.status(404);
   
    try { 
        shortUrl.clicks++
        await shortUrl.save();
        res.redirect(shortUrl.longUrl);
    } catch (error) {
        console.log(error)
    }
}

const url_delete=async(req,res)=>{
    try {
        await UrlShortner.findByIdAndDelete(req.params.id);
        res.redirect('/')
    } catch (error) {
        console.log('Not deleted', error);
        res.redirect('/')
    }
  
}

module.exports={
    url_index,
    url_shorturls_post,
    url_get_shorturl,
    url_delete
}