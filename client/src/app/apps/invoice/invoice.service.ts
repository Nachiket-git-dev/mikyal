import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from 'src/app/sitesettings';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private _http: HttpClient) { }
  createinvoice(data: any) {
    let invoicedata = data;
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    const url = `${siteConfig.nodeAPIBaseUrl}/createinvoice`;
    let res = this._http.post(url, invoicedata, { params: params });
    return res;
  }
  
  getallinvoices() {
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    const url = `${siteConfig.nodeAPIBaseUrl}/getallinvoices`;
    let res = this._http.get(url, { params: params });
    return res;
  }
  
  changestatus(data) {
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    const url = `${siteConfig.nodeAPIBaseUrl}/changestatus`;
    let res = this._http.post(url,data, { params: params });
    return res;
  }
  getinvoicebyid(invoice_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('invoice_id',invoice_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/getinvoicebyid`;
    let res = this._http.get(url, { params: params });
    return res;

  }
  getinvoiceservice(invoice_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('invoice_id',invoice_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/getservice`;
    let res = this._http.get(url, { params: params });
    return res;

  }
  updateinvoice(invoicedata){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    const url = `${siteConfig.nodeAPIBaseUrl}/updateinvoice`;
    let res = this._http.post(url,invoicedata,{ params: params });
    return res;

  }
  
  deleteservicerow(item_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set("item_id",item_id)
    const url = `${siteConfig.nodeAPIBaseUrl}/deleteservicerow`;
    let res = this._http.delete(url,{ params: params });
    return res;

  }
  sendmail(base64attachment){
    let data={pdf:base64attachment}
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database)
    const url = `${siteConfig.nodeAPIBaseUrl}/sendmail`;
    let res = this._http.post(url,data,{ params: params });
    return res
  }
  deleteinvoice(invoice_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set("invoice_id",invoice_id)
    const url = `${siteConfig.nodeAPIBaseUrl}/deleteinvoice`;
    let res = this._http.delete(url,{ params: params });
    return res;

  }
  getprojectinvoice(project_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',project_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/getprojectinvoice`;
    let res = this._http.get(url, { params: params });
    return res;

  }
  getpaidinvoice(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    const url = `${siteConfig.nodeAPIBaseUrl}/getpaidinvoice`;
    let res = this._http.get(url,{ params: params });
    console.log("in service=> ",res);
    return res;
  }

  getinvoicebydaterange(start_date,end_date){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database).set("start_date",start_date).set("end_date",end_date);
    const url = `${siteConfig.nodeAPIBaseUrl}/getinvoicebydaterange`;
    let res = this._http.get(url,{ params: params });
    console.log("in service=> ",res);
    return res;
  }
}
