var mysql = require('mysql');
var os = require('os');
os.hostname();
console.log("os.hostname()",os.hostname());
config = {
  
    host: 'mikyaldatabaseclusterdev.cluster-cyatsnvygubg.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    //database: 'mesh_dashboard',
    multipleStatements: true
}
// config = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   //database: 'mesh_dashboard',
//   multipleStatements: true
// }
var connection =mysql.createConnection(config); //added the line
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully to DB.');
});
module.exports = connection;

module.exports.selectdb=function(dbname){
  try{ 
      var status=true
      return new Promise(async(resolve, reject) => {
        try{
          let sql = "CREATE DATABASE "+dbname+"";
          let query = connection.query(sql,(err, results) => {
          if(err){
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


};