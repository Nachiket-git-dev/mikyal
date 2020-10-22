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
router.post('/createlist',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var scrum_list=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      console.log("card",scrum_list);

      
     responseHandler(req, res, scrumservice.createlist(dbname,scrum_list));
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
router.get('/getlists',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     
     //console.log("body len",req.body.length)
     //console.log("req",req)
     

      
     responseHandler(req, res, scrumservice.getlists(dbname));
});

router.post('/changelist',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var scrum_id=req.body; 
     console.log("scrum_id",scrum_id);
     //console.log("body len",req.body.length)
     //console.log("req",req)
     

      
 responseHandler(req, res, scrumservice.changelist(dbname,scrum_id));
});
module.exports = router;