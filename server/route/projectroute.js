const projectservice= require('../service/projectservice').getInst();
var responseHandler = require('./handler').response;
var router= require('express').Router()

router.post('/createproject',(req,res) =>{
    console.log("request body");
   
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var project=req.body;
     //console.log("body len",req.body.length)
     //console.log("req",req)
      console.log("project",project);

      
     responseHandler(req, res, projectservice.createproject(dbname,project));
});
router.get('/getallproject',(req,res) =>{
    console.log("request body");
    console.log(req.body);
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
    
     responseHandler(req, res, projectservice.getallproject(dbname));
});
router.get('/getprojectbyid',(req,res) =>{
    console.log("request body");
    console.log(req.body);
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var proj_id=req.query.proj_id;
    
     responseHandler(req, res, projectservice.getprojectbyid(dbname,proj_id));
});
router.post('/insertfile',(req,res) =>{
    console.log("request body");
    console.log(req.body);
    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var proj_id=req.query.proj_id;
     var files=req.body;
    console.log("name",files);
    
    responseHandler(req, res, projectservice.uploadfiles(dbname,files,proj_id));
});
router.get('/getfilesbyprojectid',(req,res) =>{

    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var proj_id=req.query.proj_id;
     responseHandler(req, res, projectservice.getfilesbyprojectid(dbname,proj_id));
});
router.post('/updatestatus',(req,res) =>{

    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var status=req.body;
     var proj_id=req.query.proj_id;
     responseHandler(req, res, projectservice.updatestatus(dbname,proj_id,status));
});
router.post('/updateproject',(req,res) =>{

     console.log("request query");
     console.log(req.query);
     var dbname=req.query;
     var project=req.body;
     var proj_id=req.query.proj_id;
     responseHandler(req, res, projectservice.updateproject(dbname,proj_id,project));
});
router.delete('/deleteproject',(req,res) =>{

    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var proj_id=req.query.proj_id;
     responseHandler(req, res, projectservice.deleteproject(dbname,proj_id));
});
router.delete('/deletefile',(req,res) =>{

    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var file_id=req.query.file_id;
     responseHandler(req, res, projectservice.deletefile(dbname,file_id));
});
module.exports = router;

router.post('/saveimages',(req,res) =>{

    console.log("request query");
    //console.log(req.query);
     var dbname=req.query;
     var last_index=req.query.last_index
     var project=req.body;
     //console.log(project);
     var proj_id=req.query.proj_id;
     responseHandler(req, res, projectservice.saveimages(dbname,project,proj_id,last_index));
});
router.get('/getimages',(req,res) =>{

    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var proj_id=req.query.proj_id;
     responseHandler(req, res, projectservice.getimages(dbname,proj_id));
});
router.delete('/deleteprojectimage',(req,res) =>{

    console.log("request query");
    console.log(req.query);
     var dbname=req.query;
     var img_id=req.query.img_id;
     responseHandler(req, res, projectservice.deleteprojectimage(dbname,img_id));
});

router.get('/getprojectlink',(req,res) =>{

     console.log("request query");
     console.log(req.query);
      var dbname=req.query;
      var proj_id=req.query.proj_id;
      responseHandler(req, res, projectservice.getprojectlink(dbname,proj_id));
 })
 router.post('/addtoportfolio',(req,res) =>{

     console.log("request addtoportfolio ");
     console.log(req.query);
      var dbname=req.query;
      var proj_id=req.query.proj_id;
      responseHandler(req, res, projectservice.addtoportfolio(dbname,proj_id));
 })
 router.post('/removetoportfolio',(req,res) =>{

     console.log("request query");
     console.log(req.query);
      var dbname=req.query;
      var proj_id=req.query.proj_id;
      responseHandler(req, res, projectservice.removetoportfolio(dbname,proj_id));
 })
 router.get('/getpendingproject',(req,res) =>{

     console.log("request query");
     console.log(req.query);
      var dbname=req.query;
     
      responseHandler(req, res, projectservice.getpendingproject(dbname));
 })
 router.get('/getcompleteproject',(req,res) =>{

     console.log("request query");
     console.log(req.query);
      var dbname=req.query;
     
      responseHandler(req, res, projectservice.getcompleteproject(dbname));
 })
 
 router.post('/savecoverimage',(req,res) =>{

     console.log("request query");
     //console.log(req.query);
      var dbname=req.query;
      var last_index=req.query.last_index
      var image=req.body;
      //console.log(project);
      var proj_id=req.query.proj_id;
      responseHandler(req, res, projectservice.savecoverimage(dbname,image,proj_id));
 });

 
 router.get('/checkcoverimage',(req,res) =>{

     console.log("request query");
     console.log(req.query);
      var dbname=req.query;
      var proj_id=req.query.proj_id;
      responseHandler(req, res, projectservice.checkcoverimage(dbname,proj_id));
 })
 router.delete('/deletecoverimage',(req,res) =>{

     console.log("request query");
     console.log(req.query);
      var dbname=req.query;
      var img_id=req.query.img_id;
      responseHandler(req, res, projectservice.deletecoverimage(dbname,img_id));
 });
 router.get('/getallcoverimage',(req,res) =>{

     console.log("request query in cover");
     console.log(req.query);
      var dbname=req.query;
      responseHandler(req, res, projectservice.getallcoverimage(dbname));
 });
 router.post('/createmilestone',(req,res) =>{

     console.log("request query");
     //console.log(req.query);
      var dbname=req.query;
      var last_index=req.query.last_index
      var milestone=req.body;
      //console.log(project);
      var proj_id=req.query.proj_id;
      responseHandler(req, res, projectservice.createmilestone(dbname,proj_id,milestone));
 });
 router.get('/getmilestonebyproject',(req,res) =>{

     console.log("request query");
     //console.log(req.query);
      var dbname=req.query;
     
      //console.log(project);
      var proj_id=req.query.project_id;
      responseHandler(req, res, projectservice.getmilestonebyproject(dbname,proj_id));
 });
 
