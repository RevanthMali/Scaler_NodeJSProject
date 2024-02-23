const mongoose = require("mongoose");
const UrlSchema = new mongoose.Schema(
  {
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    redirectedURL:{
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: {type: Number}}],
    },{
        timestamps:true}
    ); 
    const URL = mongoose.model('url',UrlSchema);

    module.exports = URL;