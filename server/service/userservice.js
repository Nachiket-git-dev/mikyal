const responseHelper = require('../Helper/commonHelper');
const usermodel = require('../model/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function Service() {
    //baseService.call(this);
}
Service.prototype.createuser=function(user){
    return new Promise(async(resolve,reject)=>{
        let checkuser= await usermodel.isalreadyexist(user.email);
        console.log("checkuser",checkuser);
        if(checkuser.length>=1){
            resolve(responseHelper.generateError("Error", "UserAlready Exist"));
        }else{
        let passhash=  bcrypt.hashSync(user.password, 10);
        let projdata={first_name:user.firstname,last_name:user.lastname,email:user.email,password:passhash}
        let custres=await usermodel.createuser(projdata);
        if(custres.affectedRows>0  ){  
            let user_details={user_id:custres.insertId};
            let userdetails=await usermodel.insertuserdetails(user_details);
            let usernameupdate=await usermodel.createusername(user.lastname,custres.insertId);
            let dbname=user.lastname+"_"+custres.insertId;
            let dbcreate= await usermodel.selectdb(dbname)
            console.log("dbcreate",dbcreate)
            let tablecreate=await usermodel.createtable(dbname);
            console.log("username",usernameupdate)
            if(usernameupdate.changedRows>0){
                 resolve(responseHelper.generateResponse("Success", custres));
            }else{
                resolve(responseHelper.generateError("error in update username",usernameupdate));
            }      
        }else{
            resolve(responseHelper.generateError("error in create user",custres));
        }
    } 
    })
    

}
Service.prototype.login=function(userdetails){
     
    return new Promise(async (resolve, reject) => {
      try{
         let response= await usermodel.login(userdetails);
           if(response.length>0){
            jwt.sign({response}, 'secretkey',  (err, token) => {
              let retresponse={
                response,
                token
              }
              
            resolve(responseHelper.generateResponse("Success", retresponse));
            }); 
          }else{
            resolve(responseHelper.generateError("Error", "Invalid Crediantial"));
           }
     }catch{
      //   res.json({
      //    "code":"505",
      //    "message":"Database Already Created For This Name"
      //  });    
      resolve();
     }
   
 })
    
};

Service.prototype.getuserdetails=function(user_id){
    return new Promise(async(resolve,reject)=>{
        
        let custres=await usermodel.getuserdetails(user_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.getuserbasicinfo=function(user_id){
    return new Promise(async(resolve,reject)=>{
        
        let custres=await usermodel.getuserbasicinfo(user_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}
Service.prototype.updateuserdetails=function(user_id,user){
    return new Promise(async(resolve,reject)=>{
        let userdetails={bio:user.bio,phone:user.phone,name:user.name,job_title:user.job_title,
            address:user.address,country:user.country,company:user.company,dob:user.dob,
            gender:user.gender,image_blob:user.image_blob}
       
        
        let custres=await usermodel.updateuserdetails(user_id,userdetails);
        
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    
}

Service.prototype.changepassword=function(user_id,user){
    return new Promise(async(resolve,reject)=>{
     
      
       let passhash=  bcrypt.hashSync(user.newpassword, 10);
       let newpassword={password:passhash}
        let custres=await usermodel.changepassword(user_id,user,newpassword);
        
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    
}

Service.prototype.updateaboutus=function(user_id,user){
    return new Promise(async(resolve,reject)=>{
      
      let userdata={first_name:user.first_name,last_name:user.last_name,image_blob:user.user_image}
     
        let custres=await usermodel.updateaboutus(user_id,userdata);
        
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    
}

Service.prototype.getuserimage=function(user_id){
    return new Promise(async(resolve,reject)=>{
        
        let custres=await usermodel.getuserimage(user_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.disabletour=function(user_id){
    return new Promise(async(resolve,reject)=>{
      
       let data={tour:0}
     
        let custres=await usermodel.disabletour(user_id,data);
        
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    
}

Service.prototype.setgoal=function(database,goal){
    return new Promise(async(resolve,reject)=>{
     let  goaldata={goal_type:goal.goal_type,total_goal:goal.total_goal,goal_duration:goal.duration}
        let check=await usermodel.checkgoal(database,goal.goal_type,goal.duration);
        if(check.length>0){
            let custres=await usermodel.updategoal(database,goaldata,check[0].goal_id);
            if(custres.affectedRows>0  ){  
                resolve(responseHelper.generateResponse("Success", custres));      
            }else{
                resolve(responseHelper.generateError("error",custres));
            }
        }else{
        let custres=await usermodel.setgoal(database,goaldata);
        
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    }
    })
    
}

Service.prototype.getusergoal=function(database){
    return new Promise(async(resolve,reject)=>{
        
        let custres=await usermodel.getusergoal(database);
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
}