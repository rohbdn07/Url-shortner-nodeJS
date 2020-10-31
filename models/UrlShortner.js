const mongoose = require("mongoose");
const shortId=require('shortid');
const Schema = mongoose.Schema;

const UrlShortnerSchema= new Schema({
 longUrl:{
     type:String,
     required:true
 },
 shortUrl:{
     type:String,
     required:true,
     default:shortId.generate
 },
 clicks:{
     type:Number,
     required:true,
     default:0
 },
 createdAt: {
    type: Date,
    default: Date.now,
  }
})

const UrlShortner  = mongoose.model("shortner", UrlShortnerSchema);

module.exports = UrlShortner;