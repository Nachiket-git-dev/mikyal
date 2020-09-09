const responseHelper = require('../Helper/commonHelper');
var md5 = require('md5');
const mysqlLib = require('../config/database');

module.exports.createproject = function (database, project) {
    return new Promise(async (resolve, reject) => {
       try {
          console.log('customer data in Model==>', project);
          var sql = "insert into " + database + ".project SET ?"
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
 module.exports.uploadfiles = function (database, project_files) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "insert into " + database + ".project_file SET ?"
         let query = mysqlLib.query(sql, project_files, (err, results) => {
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
 
 module.exports.getallproject = function (database) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".project";
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
module.exports.getprojectbyid = function (database,project_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".project where project_id= ?";
         let query = mysqlLib.query(sql,project_id ,(err, results) => {
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
module.exports.getfilesbyprojectid = function (database,project_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".project_file where project_id= ?";
         let query = mysqlLib.query(sql,project_id ,(err, results) => {
            if (err) {
               resolve(err);
            } else
            for(let i=0;i<results.length;i++){
               var buffer = new Buffer(results[i].file_blob,'binary');
               var bufferBase64 = buffer.toString('base64');
               results[i].file_blob=bufferBase64;
               }
               resolve(results);
         });

      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });

}
module.exports.updatestatus = function (database, project_id,status) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "UPDATE "+database+".project SET status= ? WHERE project_id= ?"
         let query = mysqlLib.query(sql, [status,project_id], (err, results) => {
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
module.exports.updateproject = function (database,proj_id,project) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "UPDATE "+database+".project SET  ? WHERE project_id= ?"
         let query = mysqlLib.query(sql, [project,proj_id], (err, results) => {
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

module.exports.deletefile = function (database,file_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "DELETE From "+database+".project_file WHERE project_file_id= ?"
         let query = mysqlLib.query(sql, file_id, (err, results) => {
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

module.exports.deleteproject = function (database,proj_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "DELETE From "+database+".project WHERE project_id= ?"
         let query = mysqlLib.query(sql, proj_id, (err, results) => {
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

module.exports.makelink = function (database,proj_id) {
   return new Promise(async (resolve, reject) => {
      try {
          var token =md5(database+proj_id);
         var sql = "insert into "+database+".project_link (project_id,project_token) VALUES(?,?)";
         let query = mysqlLib.query(sql, [proj_id,token], (err, results) => {
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

module.exports.saveimage = function (database,images) {
   return new Promise(async (resolve, reject) => {
      try {
          
          var sql = "insert into " + database + ".project_images SET ?"
         let query = mysqlLib.query(sql,images,(err, results) => {
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

module.exports.getimages = function (database,project_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".project_images where project_id= ?";
         let query = mysqlLib.query(sql,project_id ,(err, results) => {
            if (err) {
               resolve(err);
            } else
            for(let i=0;i<results.length;i++){
               var buffer = new Buffer(results[i].imgblob,'binary');
               var bufferBase64 = buffer.toString('base64');
               results[i].imgblob=bufferBase64;
               }
               resolve(results);
         });

      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });

}

module.exports.deleteprojectimage = function (database,img_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "DELETE From "+database+".project_images WHERE image_id= ?"
         let query = mysqlLib.query(sql, img_id, (err, results) => {
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

module.exports.getprojectlink = function (database,project_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".project_link where project_id= ?";
         let query = mysqlLib.query(sql,project_id ,(err, results) => {
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
module.exports.addtoportfolio = function (database,project_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "UPDATE " + database + ".project SET portfolio='1' where project_id=?";
         console.log(sql);
         let query = mysqlLib.query(sql,project_id ,(err, results) => {
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
module.exports.removetoportfolio = function (database,project_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "UPDATE " + database + ".project SET portfolio=0 where project_id=?";
         let query = mysqlLib.query(sql,project_id ,(err, results) => {
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

module.exports.getpendingproject = function (database) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".project where status!= 3";
         let query = mysqlLib.query(sql,(err, results) => {
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
module.exports.getcompleteproject = function (database) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".project where status= 3";
         let query = mysqlLib.query(sql,(err, results) => {
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

module.exports.savecoverimage = function (database,images) {
   return new Promise(async (resolve, reject) => {
      try {
          
          var sql = "insert into " + database + ".project_cover SET ?"
         let query = mysqlLib.query(sql,images,(err, results) => {
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
module.exports.updatecoverimage = function (database,images,proj_id) {
   return new Promise(async (resolve, reject) => {
      try {
          
          var sql = "UPDATE " + database + ".project_cover SET ? WHERE project_id= ?"
         let query = mysqlLib.query(sql,[images,proj_id],(err, results) => {
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
module.exports.checkcoverimage = function (database,proj_id) {
   return new Promise(async (resolve, reject) => {
      try {
          
          var sql = "select * from "+database+".project_cover where project_id= ?"
         let query = mysqlLib.query(sql,proj_id,(err, results) => {
            if (err) {
               reject(err);
            } else{
               for(let i=0;i<results.length;i++){
                  var buffer = new Buffer(results[i].cover_image,'binary');
                  var bufferBase64 = buffer.toString('base64');
                  results[i].cover_image=bufferBase64;
                  }
               resolve(results);
         }
         });

      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });

}

module.exports.deletecoverimage = function (database,img_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "DELETE From "+database+".project_cover WHERE proj_cover_id= ?"
         let query = mysqlLib.query(sql, img_id, (err, results) => {
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

module.exports.getallcoverimage = function (database) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".project_cover"
         let query = mysqlLib.query(sql, (err, results) => {
            if (err) {
               reject(err);
            } else{
            for(let i=0;i<results.length;i++){
               var buffer = new Buffer(results[i].cover_image,'binary');
               var bufferBase64 = buffer.toString('base64');
               results[i].cover_image=bufferBase64;
               }
               resolve(results);
            }
         });

      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
   });

}