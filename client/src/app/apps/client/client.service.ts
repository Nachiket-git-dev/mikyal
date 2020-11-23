import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from '../../sitesettings';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _http:HttpClient) { }
  createclient(user){
    let body;
    let database=localStorage.getItem('Database_Name');
    let jwttoken=localStorage.getItem('userToken');
    console.log("database",database);
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken ); 
    let params = new HttpParams().set('database',database);
    const url = `${siteConfig.nodeAPIBaseUrl}/createclient`;
    let res = this._http.post(url,user,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
  getallclient(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken ); 
    const url = `${siteConfig.nodeAPIBaseUrl}/getallclient`;
    let res = this._http.get(url,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
  updateclient(client_id,client){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database).set('client_id',client_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/updateclient`;
    let res = this._http.post(url,client,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
  deleteclient(client_id){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database).set('client_id',client_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/deleteclient`;
    let res = this._http.delete(url,{ params: params,headers:headers });
    console.log("in service=> ",res);
    
    return res;
  }
  getclientbyid(client_id){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database).set('client_id',client_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getclientbyid`;
    let res = this._http.get(url,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
}
