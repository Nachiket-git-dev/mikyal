const responseHelper = require('../Helper/commonHelper');
const clientmodel = require('../model/clientmodel');


function Service() {
    //baseService.call(this);
}


Service.prototype.createclient=function(dbname,client){
    return new Promise(async(resolve,reject)=>{
       
       let clientdata={first_name:client.first_name,last_name:client.last_name,
        phone:client.phone,email:client.email,street:client.street,zip:client.zip,city:client.city,note:client.notes,company:client.company};
        let clienttres=await clientmodel.createclient(dbname,clientdata);
        console.log(clienttres);
        if(clienttres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", clienttres));      
        }else{
            resolve(responseHelper.generateError("error",clienttres));
        }
    })
    

}
Service.prototype.getallclient=function(dbname){
    return new Promise(async(resolve,reject)=>{
        
        let custres=await clientmodel.getallclient(dbname);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.updateclient=function(client_id,dbname,client){
    return new Promise(async(resolve,reject)=>{
       
       let clientdata={first_name:client.first_name,last_name:client.last_name,
        phone:client.phone,email:client.email,street:client.street,zip:client.zip,city:client.city,note:client.notes,company:client.company};
        let clienttres=await clientmodel.updateclient(client_id,dbname,clientdata);
        console.log(clienttres);
        if(clienttres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", clienttres));      
        }else{
            resolve(responseHelper.generateError("error",clienttres));
        }
    })
    

}

Service.prototype.deleteclient=function(dbname,client_id){
    return new Promise(async(resolve,reject)=>{
        
        let custres=await clientmodel.deleteclient(dbname,client_id);
        if(custres.affectedRows>0 ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.getclientbyid=function(dbname,client_id){
    return new Promise(async(resolve,reject)=>{
        
        let custres=await clientmodel.getclientbyid(dbname,client_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

module.exports = {
    getInst: function () {
        return new Service();
    }
};