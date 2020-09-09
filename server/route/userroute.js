const userservice= require('../service/userservice').getInst();
var responseHandler = require('./handler').response;
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
router.get('/getuserdetails',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.query.user_id;
      
     responseHandler(req, res, userservice.getuserdetails(user_id));
});
router.get('/getuserbasicinfo',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.query.user_id;
      
     responseHandler(req, res, userservice.getuserbasicinfo(user_id));
});
router.post('/updateuserdetails',(req,res) =>{
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
router.post('/changepassword',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.body.user_id;
      var newdata=req.body;
     responseHandler(req, res, userservice.changepassword(user_id,newdata));
});
router.post('/updateaboutus',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.body.user_id;
      var newdata=req.body;
     responseHandler(req, res, userservice.updateaboutus(user_id,newdata));
});

router.get('/getuserimage',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.query.user_id;
      
     responseHandler(req, res, userservice.getuserimage(user_id));
});
router.post('/disabletour',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);  
     var user_id=req.body.user_id;
     responseHandler(req, res, userservice.disabletour(user_id));
});
router.post('/setgoal',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);  
     var database=req.query.database;
     var goals=req.body;
     responseHandler(req, res, userservice.setgoal(database,goals));
});

router.get('/getusergoal',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);  
     var database=req.query.database;
    
     responseHandler(req, res, userservice.getusergoal(database));
});
module.exports = router;