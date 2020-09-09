const responseHelper = require('../Helper/commonHelper');
var md5 = require('md5');
const bcrypt = require('bcryptjs');
const mysqlLib = require('../config/database');


module.exports.createclient = function (database,client) {
    return new Promise(async (resolve, reject) => {
       try {
          let sql="INSERT INTO "+database+".client SET ? ";
          let query = mysqlLib.query(sql,client,(err, results) => {
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
 
 module.exports.getallclient = function (database) {
    return new Promise(async (resolve, reject) => {
       try {
          let sql="select * from "+database+".client";
          let query = mysqlLib.query(sql,(err, results) => {
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
 
 module.exports.updateclient = function (client_id,database,client) {
    return new Promise(async (resolve, reject) => {
       try {
         
          var sql = "UPDATE "+database+".client SET  ? WHERE client_id= ?"
          let query = mysqlLib.query(sql, [client,client_id], (err, results) => {
             if (err) {
                reject(err);
             } else
                resolve(results);
          });
 
       } catch (err) {
          resolve(responseHelper.generateError("Somthing went wrong", err));
 
       }
    });
 
 }
 
 module.exports.deleteclient = function (database,proj_id) {
    return new Promise(async (resolve, reject) => {
       try {
         
          var sql = "DELETE From "+database+".client WHERE client_id= ?"
          let query = mysqlLib.query(sql, proj_id, (err, results) => {
             if (err) {
               resolve(responseHelper.generateError("Somthing went wrong", err));
             } else
                resolve(results);
          });
 
       } catch (err) {
          resolve(responseHelper.generateError("Somthing went wrong", err));
 
       }
    });
 
 }
 
 module.exports.getclientbyid = function (database,client_id) {
   return new Promise(async (resolve, reject) => {
      try {
         let sql="select * from "+database+".client where client_id=?";
         let query = mysqlLib.query(sql,client_id,(err, results) => {
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