const responseHelper = require('../Helper/commonHelper');
var md5 = require('md5');
const mysqlLib = require('../config/database');
module.exports.saveportfolio = function (database, project) {
    return new Promise(async (resolve, reject) => {
       try {
          console.log('customer data in Model==>', project);
          var sql = "insert into " + database + ".portfolio_settings SET ?"
          let query = mysqlLib.query(sql, project, (err, results) => {
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
 module.exports.updateportfolio = function (database, project) {
    return new Promise(async (resolve, reject) => {
       try {
          console.log('customer data in Model==>', project);
          var sql = "UPDATE " + database + ".portfolio_settings SET ? where portfolio_id=1"
          let query = mysqlLib.query(sql, project, (err, results) => {
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
 module.exports.getportfolio = function (database) {
    return new Promise(async (resolve, reject) => {
       try {
          
          var sql = "select * from " + database + ".portfolio_settings "
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