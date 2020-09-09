const portfolioservice= require('../service/portfolioservice').getInst();
var responseHandler = require('./handler').response;
var router= require('express').Router();

router.post('/saveportfolio',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var portfolio=req.body
  

      
     responseHandler(req, res, portfolioservice.saveportfolio(database,portfolio));
});
router.get('/getportfolio',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
    
     responseHandler(req, res, portfolioservice.getportfolio(database));
});

module.exports = router;