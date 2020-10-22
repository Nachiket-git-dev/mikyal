const invoiceservice= require('../service/invoiceservice').getInst();
var responseHandler = require('./handler').response;
var router= require('express').Router();
const nodemailer = require("nodemailer");
router.post('/createinvoice',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query.database
     var invoice=req.body
   console.log("invoice",invoice);

      
     responseHandler(req, res, invoiceservice.createinvoice(database,invoice));
});

router.get('/getallinvoices',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query
     var invoice=req.body
  

      
     responseHandler(req, res, invoiceservice.getallinvoices(database));
});
router.get('/getprojectinvoice',(req,res) =>{
  console.log("request body");
  console.log("request query");
  console.log(req.query);
   var database=req.query
   var project_id=req.query.proj_id;


    
   responseHandler(req, res, invoiceservice.getprojectinvoice(database,project_id));
});
router.post('/changestatus',(req,res) =>{
    console.log("request body");
    console.log("request query");
    console.log(req.query);
     var database=req.query
     var status=req.body

      
     responseHandler(req, res, invoiceservice.changestatus(database,status));
});
router.get('/getinvoicebyid',(req,res) =>{
  console.log("request body");
  console.log("request query");
  console.log(req.query);
   var database=req.query
   var invoice_id=req.query.invoice_id

    
   responseHandler(req, res, invoiceservice.getinvoicebyid(database,invoice_id));
});
router.get('/getservice',(req,res) =>{
  console.log("request body");
  console.log("request query");
  console.log(req.query);
   var database=req.query
   var invoice_id=req.query.invoice_id

    
   responseHandler(req, res, invoiceservice.getservice(database,invoice_id));
});
router.post('/updateinvoice',(req,res) =>{
  console.log("request body");
  console.log("request query");
  console.log(req.query);
   var database=req.query
   var invoice=req.body

    
   responseHandler(req, res, invoiceservice.updateinvoice(database,invoice));
});
router.delete('/deleteservicerow',(req,res) =>{
  console.log("request body");
  console.log("request query");
  console.log(req.query);
   var database=req.query
   var item_id=req.query.item_id;

    
   responseHandler(req, res, invoiceservice.deleteservicerow(database,item_id));
});

router.delete('/deleteinvoice',(req,res) =>{
  console.log("request body");
  console.log("request query");
  console.log(req.query);
   var database=req.query
   var invoice_id=req.query.invoice_id;

    
   responseHandler(req, res, invoiceservice.deleteinvoice(database,invoice_id));
});
router.post('/sendmail',async(req,res) =>{
  console.log("request body");
  console.log("request query");
  console.log(req.query);
   var database=req.query
  console.log(req.body.pdf);
  let testAccount = await nodemailer.createTestAccount();
//   let mailTransporter = nodemailer.createTransport({ 
//     service: 'gmail', 
//     auth: { 
//         user: 'nachiketchaitanya.ssl22@gmail.com', 
//         pass: 'India@1234'
//     } 
// }); 
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  },
});
var mailOptions = {
  
};
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "nachiketchaitanya.ssl22@gmail.com,", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
      {   // encoded string as an attachment
        filename: 'invoice.png',       
        content: new Buffer.from(req.body.pdf.split("base64,")[1], "base64"),
        encoding: 'base64'
      }
    ]
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
   //responseHandler(req, res, invoiceservice.sendmail(database,item_id));
});

router.get('/getpaidinvoice',(req,res) =>{
  console.log("request body");
  console.log("request query");
  console.log(req.query);
   var database=req.query
   var invoice=req.body


    
   responseHandler(req, res, invoiceservice.getpaidinvoice(database));
});
module.exports = router;