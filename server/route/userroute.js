const userservice= require('../service/userservice').getInst();
var responseHandler = require('./handler').response;
var verify=require('../config/jwtverify')
var router= require('express').Router()

router.post('/createuser',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     
     var user=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      console.log("user",user);

      
     responseHandler(req, res, userservice.createuser(user));
});
router.post('/login',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     
     var user=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      console.log("user",user);

      
     responseHandler(req, res, userservice.login(user));
});
router.post('/getuser',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     
     var user=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      console.log("user",user);
      var email=req.query.email;
      
     responseHandler(req, res, userservice.getuser(email));
});
router.get('/getuserdetails',verify.verifyToken,(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.query.user_id;
      
     responseHandler(req, res, userservice.getuserdetails(user_id));
});
router.get('/getuserbasicinfo',verify.verifyToken,(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.query.user_id;
      
     responseHandler(req, res, userservice.getuserbasicinfo(user_id));
});
router.post('/updateuserdetails',verify.verifyToken,(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     
     var user=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      console.log("user",user);
      var user_id=req.query.user_id;
      
     responseHandler(req, res, userservice.updateuserdetails(user_id,user));
});
router.post('/changepassword',verify.verifyToken,(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.body.user_id;
      var newdata=req.body;
     responseHandler(req, res, userservice.changepassword(user_id,newdata));
});
router.post('/updateaboutus',verify.verifyToken,(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.body.user_id;
      var newdata=req.body;
     responseHandler(req, res, userservice.updateaboutus(user_id,newdata));
});

router.get('/getuserimage',verify.verifyToken,(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.query.user_id;
      
     responseHandler(req, res, userservice.getuserimage(user_id));
});
router.post('/disabletour',verify.verifyToken,(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.body.user_id;
     responseHandler(req, res, userservice.disabletour(user_id));
});
router.post('/setgoal',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);  
     var database=req.query.database;
     var goals=req.body;
     responseHandler(req, res, userservice.setgoal(database,goals));
});

router.get('/getusergoal',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);  
     var database=req.query.database;
    
     responseHandler(req, res, userservice.getusergoal(database));
});
module.exports = router;