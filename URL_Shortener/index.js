 const express = require("express");
 const mongoose = require("mongoose");
const urlRoute = require("./routes/url");
const URL = require("./db/urls");
 
 const app = express();
 
 mongoose.connect("mongodb://127.0.0.1:27017/shortURL").then(()=>{
    console.log("Connected to mongoDB!");
   })
   app.use(express.json());

   app.use("/url",urlRoute);
   app.get("/:shortId", async (req, res) => {
      try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
         {
           shortId,
         },
         {
           $push: {
             visitHistory: {
               timestamp: Date.now(),
             },
           },
         }
       );
        if (entry) {
          res.redirect(entry.redirectedURL);
        } else {
          res.status(404).send("URL not found");
        }
      } catch (error) {
        console.error("Error redirecting:", error);
        res.status(500).send("Internal Server Error");
      }
    });
    

 app.listen(3005,()=>{
    console.log("Server started");
 })