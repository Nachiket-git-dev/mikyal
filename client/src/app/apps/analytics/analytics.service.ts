import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from 'src/app/sitesettings';
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private _http:HttpClient) { }
  getpaidinvoice(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getpaidinvoice`;
    let res = this._http.get(url,{ params: params ,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
}

