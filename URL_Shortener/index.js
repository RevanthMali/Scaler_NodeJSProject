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
  app.get('/:shortId', async (req, res) => {
    try {
      const shortId = req.params.shortId;
      const entry = await URL.findOneAndUpdate(
        { shortId },
        {
          $push: {
            visitHistory: { timestamp: Date.now() },
          },
        }
      );
      if (!entry) {
        return res.status(404).send('Short URL not found');
      }
      const redirectedURL =
        entry.redirectedURL.startsWith('http://') || entry.redirectedURL.startsWith('https://')
          ? entry.redirectedURL
          : `http://${entry.redirectedURL}`;
      res.redirect(redirectedURL);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
 app.listen(3005,()=>{
    console.log("Server started");
 })