const clinetservice= require('../service/clientservice').getInst();
var responseHandler = require('./handler').response;
var router= require('express').Router();


router.post('/createclient',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var client=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      console.log("client",client);

      
     responseHandler(req, res, clinetservice.createclient(database,client));
});
router.get('/getallclient',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     //var client=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, clinetservice.getallclient(database));
});
router.post('/updateclient',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var client_id=req.query.client_id
     var client=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, clinetservice.updateclient(client_id,database,client));
});
router.delete('/deleteclient',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var client_id=req.query.client_id
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, clinetservice.deleteclient(database,client_id));
});
router.get('/getclientbyid',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var client_id=req.query.client_id
     //var client=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, clinetservice.getclientbyid(database,client_id));
});

module.exports = router;