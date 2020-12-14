const express = require('express');
const project = require('./projectroute.js');
const user = require('./userroute.js')
const client =require('./clientroute.js');
const task=require('./taskroute.js');
const invoice=require('./invoiceroute.js');
const  health =require('./healthcheck');
const portfoliosettings=require('./portfoliosettings');
const scrumboard=require('./scrumroute');
var cors = require('cors');
var router = require('express').Router();
const app=express();
router.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});
router.use(cors({ Origin: '*' }));
router.use(project);
router.use(user);
router.use(client);
router.use(task);
router.use(invoice);
router.use(portfoliosettings);
router.use(scrumboard);
router.use(health);
//router.use()

module.exports = router;