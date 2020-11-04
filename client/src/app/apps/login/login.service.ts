import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from 'src/app/sitesettings';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { 
  

  }
  private static hasToken(): boolean {
    return !!localStorage.getItem('userToken');
  }
  login(user){
    let body;
   // let params = new HttpParams().set('database', 'user_phase_3').set('proj_id',proj_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/login`;
    let res = this._http.post(url,user);
    console.log("in service=> ",res);
    return res;
  }
  getUserData(): User[]{
    if(LoginService.hasToken()){
      return <User[]>JSON.parse(localStorage.getItem('userData'));
    }else{
      return null;
    }
  }

  
}
export interface User {
  user_id:Number,
  email:string,
  password:string,
  username:string,
  first_name:string,
  last_name:string,
  image_blob:string,
  tour:boolean

}
