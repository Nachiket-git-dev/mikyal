import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from 'src/app/sitesettings';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }
  
  createuser(user){
    let body;
   // let params = new HttpParams().set('database', 'user_phase_3').set('proj_id',proj_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/createuser`;
    let res = this._http.post(url,user);
    console.log("in service=> ",res);
    return res;
  }
}
