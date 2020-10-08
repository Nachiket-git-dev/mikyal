const responseHelper = require('../Helper/commonHelper');
const mysqlLib = require('../config/database');

module.exports.createinvoice = function (database,invoice,item_rows) {
    return new Promise(async (resolve, reject) => {
       try {
        mysqlLib.beginTransaction(function(err) {
          let sql="INSERT INTO "+database+".invoices SET ? ";
          let query = mysqlLib.query(sql,invoice,(err, results) => {
            if(err){
                mysqlLib.rollback(function() {
                   console.log("err",err)
                    resolve(responseHelper.generateError("Somthing went wrong", err));
                  });
            }else{ 
              let sql="INSERT INTO "+database+".invoice_line_item( invoice_id, service_name,qty,discount, description,unit_price, price) VALUES ? "
              var PresetData = [item_rows.length];
                for( let i = 0; i < item_rows.length; i++){
                        PresetData[i] = [results.insertId, "" + item_rows[i].service_name, ""+item_rows[i].qty,  ""+item_rows[i].discount, ""+ item_rows[i].description,""+item_rows[i].unit_cost, ""+item_rows[i].price ];
                    }
                    let query = mysqlLib.query(sql,[PresetData],(err, line_results) => {
                        if(err){
                            mysqlLib.rollback(function() {
                                console.log("err","rollback")
                                resolve(responseHelper.generateError("Somthing went wrong", err));
                              });
                            }else{
                               console.log("line_results",line_results);
                            }
                    })
                    mysqlLib.commit(function(err) {
                        if (err) { 
                            mysqlLib.rollback(function() {
                            throw err;
                          });
                        }
                    })
                     resolve(results);
            }
          })
        });
       } catch (err) {
          resolve(responseHelper.generateError("Somthing went wrong", err));
       }
    
    });
}
module.exports.getallinvoices = function (database) {
    return new Promise(async (resolve, reject) => {
       try {
         
          var sql = "select * from "+database+".invoices";
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
 module.exports.changestatus = function (database,status,invoice_id) {
    return new Promise(async (resolve, reject) => {
       try {
         
          var sql = "UPDATE "+database+".invoices SET status= ? WHERE invoice_id= ?"
          let query = mysqlLib.query(sql, [status,invoice_id], (err, results) => {
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
 
 module.exports.getinvoicebyid = function (database,invoice_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".invoices where invoice_id=?";
         let query = mysqlLib.query(sql,invoice_id, (err, results) => {
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
module.exports.getservice = function (database,invoice_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "select * from "+database+".invoice_line_item where invoice_id=?";
         let query = mysqlLib.query(sql,invoice_id,(err, results) => {
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

module.exports.updateinvoice = function (database,inv_id,invoice,item_rows) {
   return new Promise(async (resolve, reject) => {
      try {
         mysqlLib.beginTransaction(function(err) {
         var sql = "UPDATE "+database+".invoices SET ? WHERE invoice_id= ?"
         let query = mysqlLib.query(sql, [invoice,inv_id], (err, results) => {
            if (err) {
               reject(err);
            } else{
               let sql="INSERT INTO "+database+".invoice_line_item( item_id,invoice_id, service_name,qty,discount, description,unit_price, price) VALUES ? ON DUPLICATE KEY UPDATE service_name=VALUES(service_name),qty=VALUES(qty),discount=VALUES(discount),description=VALUES(description),unit_price=VALUES(unit_price),price=VALUES(price)"
              var PresetData = [item_rows.length];
              console.log("inv_id",inv_id);
                for( let i = 0; i < item_rows.length; i++){
                        PresetData[i] = [item_rows[i].item_id, inv_id,  ""+item_rows[i].service_name, ""+ item_rows[i].qty,""+item_rows[i].discount, ""+ item_rows[i].description,""+item_rows[i].unit_cost, ""+item_rows[i].price ];
                    }
                    console.log("PresetData",PresetData);
                    let query = mysqlLib.query(sql,[PresetData],(err, line_results) => {
                     if(err){
                         mysqlLib.rollback(function() {
                             console.log("err"," "+err);
                             resolve(responseHelper.generateError("Somthing went wrong", err));
                           });
                         }else{
                            console.log("line_results",line_results);
                         }


                 })
                 mysqlLib.commit(function(err) {
                  if (err) { 
                      mysqlLib.rollback(function() {
                      throw err;
                    });
                  }
              })
               resolve(results);
            }
         });
      }) 

      } catch (err) {
         resolve(responseHelper.generateError("Somthing went wrong", err));

      }
    
   })
}

module.exports.deleteservicerow = function (database,item_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "DELETE from "+database+".invoice_line_item where item_id=?"
         let query = mysqlLib.query(sql, item_id, (err, results) => {
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

module.exports.deleteinvoice = function (database,invoice_id) {
   return new Promise(async (resolve, reject) => {
      try {
        
         var sql = "DELETE from "+database+".invoices where invoice_id=?"
         let query = mysqlLib.query(sql, invoice_id, (err, results) => {
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