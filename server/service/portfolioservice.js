const responseHelper = require('../Helper/commonHelper');
const portfoliomodel = require('../model/portfoliomodel');


function Service() {
    //baseService.call(this);
}


Service.prototype.saveportfolio=function(dbname,portfolio){
    return new Promise(async(resolve,reject)=>{
       let portfoliodata={header_title:portfolio.header_title,header_description:portfolio.header_description,
        sub_header:portfolio.sub_header,content:portfolio.content,footer:portfolio.footer,social_facebook:portfolio.social_facebook,
        social_twitter:portfolio.social_twitter,social_google:portfolio.social_google};
        let check=await portfoliomodel.getportfolio(dbname);
        console.log("check",check);
        if(check.length>0){
            let portfoliores=await portfoliomodel.updateportfolio(dbname,portfoliodata);
            if(portfoliores.affectedRows>0  ){
                resolve(responseHelper.generateResponse("Success", portfoliores));
            }else{
                resolve(responseHelper.generateError("error",portfoliores));
            }
        }else{
            let portfoliores=await portfoliomodel.saveportfolio(dbname,portfoliodata);
            console.log(portfoliores);
            if(portfoliores.affectedRows>0  ){  
                let insertid=portfoliores.insertId;
                resolve(responseHelper.generateResponse("Success", portfoliores));      
            }else{
                resolve(responseHelper.generateError("error",portfoliores));
        }
        }
    })
    
}

Service.prototype.getportfolio=function(dbname){
    return new Promise(async(resolve,reject)=>{
       
        let custres=await portfoliomodel.getportfolio(dbname);
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