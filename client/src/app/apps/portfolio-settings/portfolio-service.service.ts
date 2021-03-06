import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from 'src/app/sitesettings'
@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private _http:HttpClient) { }
  saveportfolio(data: any) {
    let portfolio = data;
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/saveportfolio`;
    let res = this._http.post(url, portfolio, { params: params,headers:headers });
    return res;
  }
  
  getportfolio() {
  
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    let jwttoken=localStorage.getItem('userToken');
    let headers = new HttpHeaders();
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getportfolio`;
    let res = this._http.get(url, { params: params,headers:headers });
    return res;
  }
}

