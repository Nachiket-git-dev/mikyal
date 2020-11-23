import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
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
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getallproject`;
    let res = this._http.get(url, { params: params,headers:headers });
    return res;
  }
  getprojectbyid(proj_id){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getprojectbyid`;
    let res = this._http.get(url, { params: params,headers:headers });
    return res;
  }
  getfilebyprojectid(proj_id){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getfilesbyprojectid`;
    let res = this._http.get(url, { params: params,headers:headers});
    return res;
  }
  getprojecttask(projid){
   

    let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database_name).set('project_id',projid);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getprojecttask`;
    let res = this._http.get(url,{ params: params,headers:headers });
    return res;

  }

  addtoportfolio(project_id: string){
    let database=localStorage.getItem('Database_Name');
    let body;
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id', project_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/addtoportfolio`;
    let res = this._http.post(url,body,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }

  removetoportfolio(proj_id){
    let database=localStorage.getItem('Database_Name');
    let body;
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/removetoportfolio`;
    let res = this._http.post(url,body ,{ params: params,headers:headers });
    return res;
  }

  updatestatus(proj_id,status){
    let body={
      status:status
    }
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/updatestatus`;
    let res = this._http.post(url,body, { params: params,headers:headers });
    return res;
  }
  createproject(data: any) {
    let projectdata = data;
    let database=localStorage.getItem('Database_Name');
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/createproject`;
    let res = this._http.post(url, projectdata, { params: params,headers:headers });
    return res;
  }
  insertfile(data,proj_id) {
    let files = data;
    console.log("insertfile",files);
    let database=localStorage.getItem('Database_Name');
     
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/insertfile`;
    let res = this._http.post(url, files, { params: params,headers:headers });
    return res;
  }
  updateproject(proj_id,project){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/updateproject`;
    let res = this._http.post(url,project, { params: params,headers:headers });
    return res;
  }
  deletefile(file_id){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('file_id',file_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/deletefile`;
    let res = this._http.delete(url,{ params: params,headers:headers });
    return res;

  }
  saveimages(data,proj_id,last_index){
    let database=localStorage.getItem('Database_Name');
    let projectdata = data;
    //let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id).set('last_index',last_index);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/saveimages`;
    let res = this._http.post(url, projectdata, { params: params,headers:headers });
    return res;

  }
  deleteimages(img_id){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('img_id',img_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/deleteprojectimage`;
    let res = this._http.delete(url,{ params: params,headers:headers });
    return res;
  }
  savecoverimage(image,proj_id){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/savecoverimage`;
    let res = this._http.post(url,image,{ params: params,headers:headers });
    console.log("in service=> ",res);
    return res;
  }
  
  deletecoverimage(img_id){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('img_id',img_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/deletecoverimage`;
    let res = this._http.delete(url,{ params: params,headers:headers });
    return res;
  }
  
  checkcoverimage(proj_id){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database).set('proj_id',proj_id);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/checkcoverimage`;
    let res = this._http.get(url,{ params: params,headers:headers });
    return res;
  }
  
  createmilestone(milestone){
    let database=localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database)
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/createmilestone`;
    let res = this._http.post(url,milestone,{ params: params,headers:headers });
    return res;
  }
  getmilestonebyproject(projid){
   
    let database_name = localStorage.getItem('Database_Name');
    let params = new HttpParams().set('database', database_name).set('project_id',projid);
    let headers = new HttpHeaders();
    let jwttoken=localStorage.getItem('userToken');
    headers = headers.set('authtoken',jwttoken );
    const url = `${siteConfig.nodeAPIBaseUrl}/getmilestonebyproject`;
    let res = this._http.get(url,{ params: params,headers:headers });
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
