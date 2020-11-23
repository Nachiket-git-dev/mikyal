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
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/createinvoice`;
    let res = this._http.post(url, invoicedata, { params: params ,headers:headers });
    return res;
  }
  
  getallinvoices() {
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getallinvoices`;
    let res = this._http.get(url, { params: params ,headers:headers });
    return res;
  }
  
  changestatus(data) {
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/changestatus`;
    let res = this._http.post(url,data, { params: params ,headers:headers });
    return res;
  }
  getinvoicebyid(invoice_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('invoice_id',invoice_id);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getinvoicebyid`;
    let res = this._http.get(url, { params: params ,headers:headers });
    return res;

  }
  getinvoiceservice(invoice_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('invoice_id',invoice_id);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getservice`;
    let res = this._http.get(url, { params: params ,headers:headers });
    return res;

  }
  updateinvoice(invoicedata){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/updateinvoice`;
    let res = this._http.post(url,invoicedata,{ params: params ,headers:headers });
    return res;

  }
  
  deleteservicerow(item_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set("item_id",item_id)
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/deleteservicerow`;
    let res = this._http.delete(url,{ params: params ,headers:headers });
    return res;

  }
  sendmail(base64attachment){
    let data={pdf:base64attachment}
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database)
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/sendmail`;
    let res = this._http.post(url,data,{ params: params,headers:headers });
    return res
  }
  deleteinvoice(invoice_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set("invoice_id",invoice_id)
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/deleteinvoice`;
    let res = this._http.delete(url,{ params: params,headers:headers });
    return res;

  }
  getprojectinvoice(project_id){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',project_id);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getprojectinvoice`;
    let res = this._http.get(url, { params: params,headers:headers });
    return res;

  }
  getpaidinvoice(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    const url = `${siteConfig.nodeAPIBaseUrl}/getpaidinvoice`;
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    let res = this._http.get(url,{ params: params ,headers:headers });
    console.log("in service=> ",res);
    return res;
  }

  getinvoicebydaterange(start_date,end_date){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database).set("start_date",start_date).set("end_date",end_date);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getinvoicebydaterange`;
    let res = this._http.get(url,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
}
