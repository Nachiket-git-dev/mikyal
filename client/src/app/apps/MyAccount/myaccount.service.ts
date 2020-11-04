import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from 'src/app/sitesettings'
@Injectable({
  providedIn: 'root'
})
export class MyaccountService {

  constructor(private _http: HttpClient) { }

  getuserdetails(user_id){
    let body;
   
   let params = new HttpParams().set('user_id',user_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/getuserdetails`;
    let res = this._http.get(url,{ params: params });
    console.log("in service=> ",res);
    return res;
  }
  updateuserdetails(user_id,user){
    let body;
    let params = new HttpParams().set('user_id',user_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/updateuserdetails`;
    let res = this._http.post(url,user,{ params: params });
    console.log("in service=> ",res);
    return res;
  }
  
  changepassword(userdata){
    let body;
   // let params = new HttpParams().set('user_id',user_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/changepassword`;
    let res = this._http.post(url,userdata);
    console.log("in service=> ",res);
    return res;
  }
  getuserimage(user_id){
    let body;
   
   let params = new HttpParams().set('user_id',user_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/getuserimage`;
    let res = this._http.get(url,{ params: params });
    console.log("in service=> ",res);
    return res;
  }
}
