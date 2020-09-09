const responseHelper = require('../Helper/commonHelper');
const projectmodel = require('../model/projectmodel');
const taskservice =require('./taskservice').getInst();


function Service() {
    //baseService.call(this);
}
Service.prototype.createproject=function(dbname,project){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let project_data={client_id:project.client_id,client_name:project.client_select,project_name:project.project_name,project_subject:project.project_subject,description:project.description,
            start_date:project.start_date,end_date:project.end_date,budget:project.budget,project_expenses:project.project_expenses}
            let project_files=project.rows;
           
        let custres=await projectmodel.createproject(db,project_data);
        if(custres.affectedRows>0  ){ 
             let insertid=custres.insertId;
             await projectmodel.makelink(db,insertid);
             let taskdata=await taskservice.makeautotask(db,insertid);
             console.log("taskdata",taskdata);
              if(project_files.length>0){
             for(let i=0;i<project_files.length;i++){
                 let files_data={project_id:insertid,filename:project_files[i].filename,size:project_files[i].size,file_blob:project_files[i].base64};
                 let fileres=await projectmodel.uploadfiles(db,files_data);
                
                 if(fileres.affectedRows>0){
                 //resolve(responseHelper.generateResponse("Success", [custres,fileres]));
                 }else{
                    //resolve(responseHelper.generateError("error",fileres));
                 }
             }
              } 

            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.getallproject=function(dbname){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.getallproject(db);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}
Service.prototype.getprojectbyid=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.getprojectbyid(db,proj_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}
Service.prototype.getfilesbyprojectid=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.getfilesbyprojectid(db,proj_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.updatestatus=function(dbname,proj_id,status){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let projstatus= status.status
        let custres=await projectmodel.updatestatus(db,proj_id,projstatus);
        
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    
}

Service.prototype.updateproject=function(dbname,proj_id,project){
    return new Promise(async(resolve,reject)=>{
        project_data={client_id:project.client_id,client_name:project.client_select,project_name:project.project_name,project_subject:project.project_subject,description:project.description,
            start_date:project.start_date,end_date:project.end_date,budget:project.budget,project_expenses:project.project_expenses}
        let db=dbname.database;
        let project_files=project.rows;
        let custres=await projectmodel.updateproject(db,proj_id,project_data);
        if(custres.affectedRows>0  ){ 
            let insertid=proj_id;
             if(project_files.length>0){
            for(let i=0;i<project_files.length;i++){
                let files_data={project_id:insertid,filename:project_files[i].filename,size:project_files[i].size,file_blob:project_files[i].base64};
                let fileres=await projectmodel.uploadfiles(db,files_data);
                if(fileres.affectedRows>0){
                //resolve(responseHelper.generateResponse("Success", [custres,fileres]));
                }else{
                   //resolve(responseHelper.generateError("error",fileres));
                }
            }
             } 

           resolve(responseHelper.generateResponse("Success", custres));      
       }else{
           resolve(responseHelper.generateError("error",custres));
       }
    })
    

}

Service.prototype.deletefile=function(dbname,file_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.deletefile(db,file_id);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.deleteproject=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.deleteproject(db,proj_id);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.saveimages=function(dbname,images,proj_id,last_index){
    return new Promise(async(resolve,reject)=>{
        let custres;
        let db=dbname.database;
        console.log("last_index",last_index);
        for(let i=last_index;i<images.length;i++){
        let imagedata={project_id:proj_id,imgblob:images[i].base64,image_name:images[i].filename};
         custres=await projectmodel.saveimage(db,imagedata);
        }
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
        

    })

}

Service.prototype.getimages=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.getimages(db,proj_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.deleteprojectimage=function(dbname,img_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.deleteprojectimage(db,img_id);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    
}

Service.prototype.getprojectlink=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.getprojectlink(db,proj_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}
Service.prototype.addtoportfolio=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
       
        let custres=await projectmodel.addtoportfolio(db,proj_id);
        console.log(custres);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}
Service.prototype.removetoportfolio=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.removetoportfolio(db,proj_id);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.getpendingproject=function(dbname){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.getpendingproject(db);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}
Service.prototype.getcompleteproject=function(dbname){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.getcompleteproject(db);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.savecoverimage=function(dbname,image,proj_id){
    return new Promise(async(resolve,reject)=>{
         let db=dbname.database;
         let checkimage= await projectmodel.checkcoverimage(db,proj_id);
         if(checkimage.length>0){
            let imagedata={cover_image:image.coverimage,project_name:image.project_name};
            let updateres=await projectmodel.updatecoverimage(db,imagedata,proj_id);
            if(updateres.affectedRows>0){
                resolve(responseHelper.generateResponse("Success", updateres));  
            }else{
                resolve(responseHelper.generateError("error",updateres));
            }
         }else{
                let imagedata={project_id:proj_id,cover_image:image.coverimage,project_name:image.project_name};
                let custres=await projectmodel.savecoverimage(db,imagedata);
                console.log(custres);
                if(custres.affectedRows>0  ){  
                    resolve(responseHelper.generateResponse("Success", custres));      
                }else{
                    resolve(responseHelper.generateError("error",custres));
                }
             }
    })
    

}

Service.prototype.checkcoverimage=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.checkcoverimage(db,proj_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    

}

Service.prototype.deletecoverimage=function(dbname,img_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await projectmodel.deletecoverimage(db,img_id);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })
    
}

Service.prototype.getallcoverimage=function(dbname){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        if(db){
        let custres=await projectmodel.getallcoverimage(db);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    }else{
        resolve(responseHelper.generateError("error","username not define"));
    }
    })
    

}


module.exports = {
    getInst: function () {
        return new Service();
    }
};