var responseHandler = require('./handler').response;
const scrumservice= require('../service/scrumservice').getInst();
var router= require('express').Router();
router.post('/createcard',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var scrum_card=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      console.log("card",scrum_card);

      
     responseHandler(req, res, scrumservice.createcard(dbname,scrum_card));
});

router.get('/getallcards',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     
     //console.log("body len",req.body.length)
     //console.log("req",req)
     

      
     responseHandler(req, res, scrumservice.getallcards(dbname));
});
module.exports = router;