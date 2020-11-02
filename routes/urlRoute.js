const express = require("express");
const router = express.Router();
const urlController=require('../controllers/UrlController')

//GET route(/) to get all the saved data...
router.get('/', urlController.url_index)

//POST route (/shortUrls) to store Long Url to db...
router.post('/shortUrls', urlController.url_shorturls_post)

//GET route (/:shortUrl)...
router.get('/:shortUrl', urlController.url_get_shorturl)

//DELETE route
router.delete('/:id', urlController.url_delete)

module.exports=router;