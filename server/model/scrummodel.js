const responseHelper = require('../Helper/commonHelper');
var md5 = require('md5');
const mysqlLib = require('../config/database');

module.exports.createcard = function (database,cards) {
    return new Promise(async (resolve, reject) => {
       try {
          let sql="INSERT INTO "+database+".scrum_card SET ? ";
          let query = mysqlLib.query(sql,cards,(err, results) => {
            if(err){
               console.log(err);
               reject(err);
            }else
              resolve(results);
          })
       } catch (err) {
          resolve(responseHelper.generateError("Somthing went wrong", err));
       }
    });
 
 }
 
 module.exports.getallcards = function (database) {
    return new Promise(async (resolve, reject) => {
       try {
         
          var sql = "select * from "+database+".scrum_card";
          let query = mysqlLib.query(sql, (err, results) => {
             if (err) {
                resolve(err);
             } else
                resolve(results);
          });
 
       } catch (err) {
          resolve(responseHelper.generateError("Somthing went wrong", err));
 
       }
    });
 
 }