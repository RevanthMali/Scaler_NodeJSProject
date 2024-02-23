const shortid= require("shortid");
const URL = require("../db/urls");

async function generateShortURL(req,res){
   const body = req.body;
   if(!body.url) 
   {
    return res.status(400).json({error: "URL required"})
   } 
   const shortID = shortid();
   await URL.create({
     shortId: shortID,
     redirectedURL : body.url,
     visitHistory:[],
   });
   return res.json({id: shortID});
} 
module.exports = {generateShortURL}