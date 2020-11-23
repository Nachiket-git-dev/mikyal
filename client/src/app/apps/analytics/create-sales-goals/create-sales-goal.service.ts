import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from 'src/app/sitesettings';
@Injectable({
  providedIn: 'root'
})
export class CreateSalesGoalService {

  constructor(private _http:HttpClient) { }
  set_goal(goals){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken )
    const url = `${siteConfig.nodeAPIBaseUrl}/setgoal`;
    let res = this._http.post(url,goals,{ params: params ,headers:headers});
    console.log("in service=> ",res);
    return res;
  }
  getcurruntmonthtask(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken )
    const url = `${siteConfig.nodeAPIBaseUrl}/getcurruntmonthtask`;
    let res = this._http.get(url,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;

  }
  getcurruntyeartask(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken )
    const url = `${siteConfig.nodeAPIBaseUrl}/getcurruntyeartask`;
    let res = this._http.get(url,{ params: params ,headers:headers });
    console.log("in service=> ",res);
    return res;

  }
  getusergoal(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken )
    const url = `${siteConfig.nodeAPIBaseUrl}/getusergoal`;
    let res = this._http.get(url,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
}
