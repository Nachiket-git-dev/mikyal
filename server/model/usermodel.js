const responseHelper = require('../Helper/commonHelper');
var md5 = require('md5');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs=  require('fs');
const mysqlLib = require('../config/database');
module.exports.createuser = function (project) {
    return new Promise(async (resolve, reject) => {
       try {
          let sql="INSERT INTO  phase3_all_user.user_auth SET ? ";
          let query = mysqlLib.query(sql,project,(err, results) => {
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
 module.exports.insertuserdetails = function (user) {
   return new Promise(async (resolve, reject) => {
      try {
         let sql="INSERT INTO  phase3_all_user.user_details SET ? ";
         let query = mysqlLib.query(sql,user,(err, results) => {
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
 module.exports.createusername= function(name,userid){
   return new Promise(async (resolve, reject) => {
      try {
         let username= name+"_"+userid;
           let sql="Update  phase3_all_user.user_auth set username= ? where user_id= ? ";
           let query = mysqlLib.query(sql,[username,userid],(err, results) => {
            if(err){
               console.log(err);
               resolve(err);
            }else
              resolve(results);
          });
      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });


 }
 module.exports.isalreadyexist= function(email){
   return new Promise(async(resolve, reject) => {
       try{
         let sql = "Select user_id,email from  phase3_all_user.user_auth WHERE email='"+email+"'";
         let query = mysqlLib.query(sql,(err, results) => {
         if(err){
            console.log(err);
          reject(err);
         }else
           resolve(results);
       });
     }catch{
       reject("somthing went wrong");
     } 
     });
 }
 module.exports.login= function(userdetails){
   return new Promise(async(resolve, reject) => {
       try{
          
         let sql = "Select user_id, first_name, last_name, email, password, username, created_date,tour from phase3_all_user.user_auth WHERE email='"+userdetails.email+"'";
         let query = mysqlLib.query(sql,(err, results) => {
         if(err){
          reject(err);
         }else

         if(results.length>0){
          //resolve(results);
          console.log("userdetails.Password==>"+userdetails.password);
          if(bcrypt.compareSync(''+userdetails.password+'',results[0].password )) {
           console.log("Match");
           resolve(results);
          } else {
           resolve(false);
          }
         }else{
            resolve(responseHelper.generateError("Email Not Valid", err));
         }
       });
     }catch{
       reject("somthing went wrong");
     } 
     });
 }
 module.exports.updateuserdetails = function ( project_id,userdetails) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "UPDATE phase3_all_user.user_details SET  ? WHERE user_id= ?"
         let query = mysqlLib.query(sql, [userdetails,project_id], (err, results) => {
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

module.exports.getuserdetails = function (user_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from phase3_all_user.user_details where user_id= ?"
         let query = mysqlLib.query(sql, user_id, (err, results) => {
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

module.exports.getuserbasicinfo = function (user_id) {
   return new Promise(async (resolve, reject) => {
      try {
         //select `user_auth.user_id`, `first_name`, `last_name`, `email`, `username`,`image_blob`  from phase3_all_user.user_auth  where user_id= ?
        //select `user_id`, `first_name`, `last_name`, `email`, `username`,`image_blob`  from phase3_all_user.user_auth INNER JOIN phase3_all_user.user_details ON phase3_all_user.user_auth.user_id = phase3_all_user.user_details.user_id where user_id= 10;
         var sql = " select user_auth.user_id `first_name`, `last_name`, `email`, `username`,`image_blob`,`phone`  from phase3_all_user.user_auth INNER JOIN phase3_all_user.user_details ON phase3_all_user.user_auth.user_id = phase3_all_user.user_details.user_id where user_auth.user_id= ?";
         let query = mysqlLib.query(sql, user_id, (err, results) => {
            if (err) {
               reject(err);
            } else{
               if(results[0].image_blob){
                  var buffer = new Buffer(results[0].image_blob,'binary');
                  var bufferBase64 = buffer.toString('base64');
                  results[0].image_blob=bufferBase64;
                   }
                   resolve(results);
            }
               
         });

      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });

}
module.exports.changepassword= function(user_id,userdetails,newpassword){
   return new Promise(async(resolve, reject) => {
       try{
          console.log("user_id",user_id);
         let sql = "Select password from phase3_all_user.user_auth WHERE user_id='"+user_id+"'";
         let query = mysqlLib.query(sql,(err, results) => {
         if(err){
            console.log(err);
          reject(err);
         }else

         console.log("results=>"+results[0].password);
          //resolve(results);
          console.log("userdetails.Password==>"+userdetails.oldpassword);
          if(bcrypt.compareSync(''+userdetails.oldpassword+'',results[0].password )) {
           console.log("Match");
               let sql= "update phase3_all_user.user_auth SET ? WHERE user_id= ?"
               let query = mysqlLib.query(sql,[newpassword,user_id],(err, changeresults) => {
                  if(err){
                     console.log("err",err);
                     reject(err)
                  }else{
                     console.log("changeresults",changeresults);
                     resolve(changeresults);
                  }
                   

               })
          
          } else {
           resolve(responseHelper.generateError("wrong Password", err));
          }
       });
     }catch{
       reject("somthing went wrong");
     } 
     });
 }
 module.exports.selectdb=function(dbname){
   try{ 
       var status=true
       return new Promise(async(resolve, reject) => {
         try{
           let sql = "CREATE DATABASE "+dbname+"";
           let query = mysqlLib.query(sql,(err, results) => {
           if(err){
              console.log("err",err)
            reject(err);
           }else
             resolve(results);
         });
       }catch{
         reject("somthing went wrong");
       } 
       });
   }catch(errer){
     reject("somthing went wrong");
   
   }
 
 }
   

 module.exports.createtable=function(dbname){
   return new Promise(async(resolve, reject) => {
     console.log("dbname "+dbname);
  mysqlLib.query("USE "+dbname+"" ,  (err, rows)=> {
     console.log("err"+err);
     if (err) {
       if (err.errno == 1049) {
         console.log(  'Failed to connect MySql database');
         //return resolve('refused');
       } else {
         console.log(`Mysql Database connection error`);
        // return resolve('refused');
       }
     } else {
       //return resolve('connected');
       console.log("rows=>",rows);
       console.log("inside else");
       let queries = fs.readFileSync( path.join(__dirname, 'user_phase_3.sql'), { encoding: "UTF-8" }).split(";\n");
      
       for (let query of queries) {

         query = query.trim();
          console.log("length",query.length);
          console.log("match",query.match(/\/\*/));
         if (query.length !== 0 || !query.match(/\/\*/)) {
           console.log("inside if",query);
           mysqlLib.query(query, function (err, sets, fields) {
             if (err) {
               console.log("in err"+err);
               console.log(`Importing failed for Mysql Database  - Query:`+query);
               resolve(err)
             } else {
               console.log(`Importing Mysql Database  - Query:`);
               //resolve("succsess")
             }
           });
         }
       }
     }
   });
   //setCurrentDB(dbname).then(data =>{
     
     //if (data == 'refused') {
       
   });
     // } else if (data == 'connected') {
     //   console.log(`Connected to Mysql Database  `);
     
   // });
   // this.mysqlLib.connect(function (err) {
   //   if (err) {
   //     console.log(`Mysql Database connection error`);
   //   } else {
   //     console.log(`Connected to Mysql Database`);
   //   }
   // });
 


 };
 
 module.exports.updateaboutus = function ( user_id,userdetails) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "UPDATE phase3_all_user.user_auth SET  ? WHERE user_id= ?"
         let query = mysqlLib.query(sql, [userdetails,user_id], (err, results) => {
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
module.exports.getuserimage = function ( user_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select image_blob from phase3_all_user.user_auth WHERE user_id= ?"
         let query = mysqlLib.query(sql, user_id, (err, results) => {
            if (err) {
               reject(err);
            } else
             if(results[0].image_blob){
            var buffer = new Buffer(results[0].image_blob,'binary');
            var bufferBase64 = buffer.toString('base64');
            results[0].image_blob=bufferBase64;
             }
               resolve(results);
         });
      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });

}

module.exports.disabletour = function ( user_id,userdetails) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "UPDATE phase3_all_user.user_auth SET  ? WHERE user_id= ?"
         let query = mysqlLib.query(sql, [userdetails,user_id], (err, results) => {
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
module.exports.setgoal = function ( database,goals) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "INSERT INTO "+database+".user_goals  SET ?"
         let query = mysqlLib.query(sql, goals, (err, results) => {
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
module.exports.checkgoal = function (database,goals_type,duration) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".user_goals where goal_type= ? AND goal_duration= ?"
         let query = mysqlLib.query(sql, [goals_type,duration], (err, results) => {
            if (err) {
               reject(err);
               console.log(err);
            } else
               resolve(results);
         });

      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });

}

module.exports.updategoal = function ( database,goals,goal_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "UPDATE "+database+".user_goals SET  ? WHERE goal_id= ?"
         let query = mysqlLib.query(sql, [goals,goal_id], (err, results) => {
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

module.exports.getusergoal = function (database) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".user_goals "
         let query = mysqlLib.query(sql, (err, results) => {
            if (err) {
               reject(err);
               console.log(err);
            } else
               resolve(results);
         });

      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });

}