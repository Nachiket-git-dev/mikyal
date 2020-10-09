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
    const url = `${siteConfig.nodeAPIBaseUrl}/saveportfolio`;
    let res = this._http.post(url, portfolio, { params: params });
    return res;
  }
  
  getportfolio() {
  
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    const url = `${siteConfig.nodeAPIBaseUrl}/getportfolio`;
    let res = this._http.get(url, { params: params });
    return res;
  }
}

