import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { siteConfig } from '../../sitesettings';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient) { }

  getproject(){
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    const url = `${siteConfig.nodeAPIBaseUrl}/getallproject`;
    let res = this._http.get(url, { params: params });
    return res;
  }

  addtoportfolio(project_id: string){
    let database=localStorage.getItem('Database_Name');
    let body;
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id', project_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/addtoportfolio`;
    let res = this._http.post(url,body,{ params: params });
    console.log("in service=> ",res);
    return res;
  }

  removetoportfolio(proj_id){
    let database=localStorage.getItem('Database_Name');
    let body;
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/removetoportfolio`;
    let res = this._http.post(url,body ,{ params: params });
    return res;
  }

  updatestatus(proj_id,status){
    let body={
      status:status
    }
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    const url = `${siteConfig.nodeAPIBaseUrl}/updatestatus`;
    let res = this._http.post(url,body, { params: params });
    return res;
  }
}

// export interface ProjectInterface {
//   budget: number;
//   client_id: number;
//   client_name: string;
//   created_date: string;
//   description: string;
//   end_date: string;
//   portfolio: number;
//   project_expenses: number;
//   project_id: number;
//   project_name: string;
//   project_subject: string;
//   start_date: string;
//   status: string;
// }
