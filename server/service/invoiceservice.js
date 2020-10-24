const responseHelper = require('../Helper/commonHelper');
const invoicemodel = require('../model/invoicemodel');


function Service() {
    //baseService.call(this);
}

Service.prototype.createinvoice=function(dbname,invoice){
    return new Promise(async(resolve,reject)=>{
       let invoicedata={invoice_name:invoice.invoice_name,project_id:invoice.project_id,client_id:invoice.client_id,
        house_no:invoice.house_no,street:invoice.street,city:invoice.city,zip:invoice.zip,billing_address:invoice.billing_address,subtotal:invoice.subtotal,
        due_date:invoice.due_date,discount:invoice.discount,discount_amt:invoice.discount_amt,
        tax:invoice.tax,tax_amount:invoice.tax_amount,discount_amount:invoice.discount_amount,
        total:invoice.total,client_note:invoice.client_note};

        let taskres=await invoicemodel.createinvoice(dbname,invoicedata,invoice.rows);
        console.log(taskres);
        if(taskres.affectedRows>0  ){  
            let insertid=taskres.insertId;
            resolve(responseHelper.generateResponse("Success", taskres));      
        }else{
            resolve(responseHelper.generateError("error",taskres));
        }
    })
    
}
Service.prototype.getallinvoices=function(dbname){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await invoicemodel.getallinvoices(db);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.changestatus=function(dbname,status_body){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let invoice_id=status_body.invoice_id;
        let status=status_body.status;
        let custres=await invoicemodel.changestatus(db,status,invoice_id);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.getinvoicebydaterange=function(dbname,start_date,end_date){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        
        let custres=await invoicemodel.getinvoicebydaterange(db,start_date,end_date);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}
Service.prototype.getinvoicebyid=function(dbname,invoice_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        
        
        let custres=await invoicemodel.getinvoicebyid(db,invoice_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.getservice=function(dbname,invoice_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        
        
        let custres=await invoicemodel.getservice(db,invoice_id);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.updateinvoice=function(dbname,invoice){
    return new Promise(async(resolve,reject)=>{
       // console.log("invoice",invoice);
        let invoicedata={invoice_name:invoice.invoice_name,project_id:invoice.project_id,client_id:invoice.client_id,
            house_no:invoice.house_no,street:invoice.street,city:invoice.city,zip:invoice.zip,billing_address:invoice.billing_address,subtotal:invoice.subtotal,
            due_date:invoice.due_date,discount:invoice.discount,discount_amt:invoice.discount_amt,
            tax:invoice.tax,tax_amount:invoice.tax_amount,discount_amount:invoice.discount_amount,total:invoice.total,client_note:invoice.client_note};
        let db=dbname.database;
        console.log("invoicedata",invoicedata);
        let inv_id=invoice.invoice_id;
        let custres=await invoicemodel.updateinvoice(db,inv_id,invoicedata,invoice.rows);
        if(custres.affectedRows>0  ){ 
            

           resolve(responseHelper.generateResponse("Success", custres));      
       }else{
           resolve(responseHelper.generateError("error",custres));
       }
    })
    
}
Service.prototype.deleteservicerow=function(dbname,item_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await invoicemodel.deleteservicerow(db,item_id);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.deleteinvoice=function(dbname,invoice_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await invoicemodel.deleteinvoice(db,invoice_id);
        if(custres.affectedRows>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.getpaidinvoice=function(dbname){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await invoicemodel.getpaidinvoice(db);
        if(custres.length>0  ){  
            resolve(responseHelper.generateResponse("Success", custres));      
        }else{
            resolve(responseHelper.generateError("error",custres));
        }
    })

}

Service.prototype.getprojectinvoice=function(dbname,proj_id){
    return new Promise(async(resolve,reject)=>{
        let db=dbname.database;
        let custres=await invoicemodel.getprojectinvoice(db,proj_id);
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