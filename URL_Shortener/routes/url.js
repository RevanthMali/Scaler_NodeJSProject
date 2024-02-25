const express = require("express");
const { generateShortURL,getAnalytics } = require("../controllers/url");
const app = express();

const router = express.Router(); 


router.post('/',generateShortURL); 
router.get('/analytics/:shortId',getAnalytics);

module.exports = router;



