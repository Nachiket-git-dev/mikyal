import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from '../../sitesettings';

@Injectable({
  providedIn: 'root'
})
export class ScrumBoardService {

  constructor(private _http:HttpClient) { }

  createcard(card){
    let body;
    let database=localStorage.getItem('Database_Name');
    console.log("database",database);
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/createcard`;
    let res = this._http.post(url,card,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
  getallcards(){
    let body;
    let database=localStorage.getItem('Database_Name');
    console.log("database",database);
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getallcards`;
    let res = this._http.get(url,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
  changelist(scrum_ids){
    let body;
    let database=localStorage.getItem('Database_Name');
    console.log("database",database);
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/changelist`;
    let res = this._http.post(url,scrum_ids,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
  createlist(listdata){
    let body;
    let database=localStorage.getItem('Database_Name');
    console.log("database",database);
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/createlist`;
    let res = this._http.post(url,listdata,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
  getlists(){
    let body;
    let database=localStorage.getItem('Database_Name');
    console.log("database",database);
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getlists`;
    let res = this._http.get(url,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
}
