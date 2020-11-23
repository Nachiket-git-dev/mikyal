const taskservice= require('../service/taskservice').getInst();
var responseHandler = require('./handler').response;
var router= require('express').Router();
var verify=require('../config/jwtverify')

router.post('/createtask',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var task=req.body
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, taskservice.createtask(database,task));
});


router.get('/getalltask',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, taskservice.getalltask(database));
});
router.post('/isdonestatus',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var statusdata=req.body
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, taskservice.isdonestatus(database,statusdata));
});
router.post('/taskstage',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var stagedata=req.body
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, taskservice.taskstage(database,stagedata));
});
router.post('/taskstage',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var stagedata=req.body
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, taskservice.taskstage(database,stagedata));
});
router.get('/getprojecttask',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var project_id=req.query.project_id;
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, taskservice.getprojecttask(database,project_id));
});
router.delete('/deletetask',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var task_id=req.query.task_id
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, taskservice.deletetask(database,task_id));
});

router.get('/getprojectsallpendingtask',verify.verifyToken,(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     
   
     //console.log("body len",req.body.length)
     //console.log("req",req)
      //console.log("client",client);

      
     responseHandler(req, res, taskservice.getprojectsallpendingtask(database));
});
router.get('/getcurruntmonthtask',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     console.log("req",req)
    

      
     responseHandler(req, res, taskservice.getcurruntmonthtask(database));
});
router.get('/getcurruntyeartask',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     console.log("req",req)
    

      
     responseHandler(req, res, taskservice.getcurruntyeartask(database));
});
module.exports = router;