const responseHelper = require('../Helper/commonHelper');
const scrummodel = require('../model/scrummodel');
function Service() {
    //baseService.call(this);
}

Service.prototype.createcard=function(dbname,carddata){
    return new Promise(async(resolve,reject)=>{
       let carddatains={scrum_id:carddata.scrum_id,title:carddata.title,
        start_date:carddata.start_date,description:carddata.description};
        let db=dbname.database;
        let taskres=await scrummodel.createcard(db,carddatains);
        console.log(taskres);
        if(taskres.affectedRows>0  ){  
            let insertid=taskres.insertId;
            resolve(responseHelper.generateResponse("Success", taskres));      
        }else{
            resolve(responseHelper.generateError("error",taskres));
        }
    })
    
}
Service.prototype.getallcards=function(dbname){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        if(db){
        let cardres=await scrummodel.getallcards(db);
        if(cardres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", cardres));      
        }else{
            resolve(responseHelper.generateError("error",cardres));
        }
    }else{
        resolve(responseHelper.generateError("error","username not define"));
    }

    })

}

Service.prototype.changelist=function(dbname,scrum_ids){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        if(db){
            let scrum_id=scrum_ids.scrum_id
            let id=scrum_ids.id
            let cardres=await scrummodel.changelist(db,scrum_id,id);
            if(cardres.affectedRows>0  ){  
                resolve(responseHelper.generateResponse("Success", cardres));      
            }else{
                resolve(responseHelper.generateError("error",cardres));
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

