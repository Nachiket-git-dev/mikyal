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
 module.exports.createlist = function (database,list) {
   return new Promise(async (resolve, reject) => {
      try {
         let sql="INSERT INTO "+database+".scrumboad_list SET ? ";
         let query = mysqlLib.query(sql,list,(err, results) => {
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
 
 module.exports.getlists = function (database) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".scrumboad_list";
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
 module.exports.changelist=function(database,scrum_id,id){
   return new Promise(async (resolve,reject)=>{
    try{
       var sql= "UPDATE "+database+".scrum_card SET scrum_id=? WHERE id=?"; 
       let query = mysqlLib.query(sql,[scrum_id,id], (err, results) => {
         if (err) {
            resolve(err);
         } else
            resolve(results);
      });
    
   }catch(err){
      esolve(responseHelper.generateError("Somthing went wrong", err));

    }

   }) 
 }