import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { siteConfig } from 'src/app/sitesettings';
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(private _http:HttpClient) { }
  createtask(task){
    
    let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database_name);
    const url = `${siteConfig.nodeAPIBaseUrl}/createtask`;
    let res = this._http.post(url,task,{ params: params });
    return res;
  
  }
  
  getalltask(){
    
    let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database_name);
    const url = `${siteConfig.nodeAPIBaseUrl}/getalltask`;
    let res = this._http.get(url,{ params: params });
    return res;
  
  }
  updateisdone(statusdata){
    let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database_name);
    const url = `${siteConfig.nodeAPIBaseUrl}/isdonestatus`;
    let res = this._http.post(url,statusdata,{ params: params });
    return res;

    
  }
  
  taskstage(stagedata){
    let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database_name);
    const url = `${siteConfig.nodeAPIBaseUrl}/taskstage`;
    let res = this._http.post(url,stagedata,{ params: params });
    return res;

    
  }
  
  deletetask(task_id){
    let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database_name).set('task_id',task_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/deletetask`;
    let res = this._http.delete(url,{ params: params });
    return res;

    
  }
  getprojectsallpendingtask(){
    let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database_name);
    const url = `${siteConfig.nodeAPIBaseUrl}/getprojectsallpendingtask`;
    let res = this._http.get(url,{ params: params });
    return res;

  }
  getcurrentmonthtask(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    const url = `${siteConfig.nodeAPIBaseUrl}/getcurruntmonthtask`;
    let res = this._http.get(url,{ params: params });
    console.log("in service=> ",res);
    return res;

  }
  getcurrentyeartask(){
    let body;
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database',database);
    const url = `${siteConfig.nodeAPIBaseUrl}/getcurruntyeartask`;
    let res = this._http.get(url,{ params: params });
    console.log("in service=> ",res);
    return res;

  }
}
