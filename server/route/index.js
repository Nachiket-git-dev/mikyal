const express = require('express');
const project = require('./projectroute.js');
const user = require('./userroute.js')
const client =require('./clientroute.js');
const task=require('./taskroute.js');
const invoice=require('./invoiceroute.js');
const portfoliosettings=require('./portfoliosettings');
const scrumboard=require('./scrumroute');
var router = require('express').Router();
const app=express();
router.use(function(req, res, next){
   
    next();
});
router.use(project);
router.use(user);
router.use(client);
router.use(task);
router.use(invoice);
router.use(portfoliosettings);
router.use(scrumboard);
//router.use()

module.exports = router;