import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../services/project/project.service'
import { Router,ActivatedRoute, Params } from '@angular/router';
import { FormControl,Validators,FormGroup,FormArray } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {CreateTaskComponent} from '../../to-do-list/create-task/create-task.component'
import {ToDoListService} from '../../to-do-list/to-do-list.service'
@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {
  files: any = [];
  project:any[];
  projecttask:any[]
  filesres:any
  filesrows:FormArray;
  project_id:number;
  project_name:string;
  project_subject:string;
  description;
  portfolio:boolean;
  start_date:string;
  end_date:string;
  status:string;
  budget:string;
  create_date:string;
  client_name:string
  fileUrl
  fileform=this.fb.group({});
  constructor(private projectservice:ProjectService,private route:ActivatedRoute,
    private fb: FormBuilder,private snackbar:MatSnackBar,private sanitizer: DomSanitizer,private Dialog:MatDialog) {
    
   }

  ngOnInit() {
    this.filesrows=this.fb.array([]);
    this.fileform.addControl('files',this.filesrows);
    console.log(this.route.snapshot.queryParams['proj_id']);
    let popupOpen = () => {
      document.querySelector('.tooltip').classList.toggle('tooltip__active')
  }
  document.querySelector(".share-select").addEventListener("click", popupOpen)

  let faqOpen = (e) => {
      e.currentTarget.classList.toggle('overview-content-faq__item-active')
  }

  document.querySelectorAll(".overview-content-faq__item").forEach( e => {
    e.addEventListener("click", faqOpen)
  })
  var proj_id=this.route.snapshot.queryParams['proj_id'];
         
            this.projectservice.getprojectbyid(proj_id).subscribe(project=>{
               console.log("project=>",project)
               this.project=<any[]>project['data'][0];
               this.project_id=project['data'][0].project_id;
               this.project_name=project['data'][0].project_name;
               this.project_subject=project['data'][0].project_subject;
               this.description=project['data'][0].description;
               this.start_date=project['data'][0].start_date
               this.end_date=project['data'][0].end_date;
               this.budget=project['data'][0].budget;
               this.portfolio=project['data'][0].portfolio
               if(project['data'][0].client_name){
                this.client_name=project['data'][0].client_name;
               
                console.log("inside if conn");
               }
               console.log(" this.description", this.description);
                
             })
  this.projectservice.getfilebyprojectid(this.route.snapshot.queryParams['proj_id']).subscribe(files=>{
    console.log(files);
    for(let i=0;i<files['data'].length;i++){
     const blob = new Blob([files['data'][i].file_blob]);

     this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
   // files['data'][i].file_blob = window.atob(files['data'][i].file_blob);
   files['data'][i].file_blob = this.fileUrl
    }
    console.log("files['data']",files['data']);
    this.filesres=files['data'];
},err=>{
  console.log("err",err);
});
this.projectservice.getprojecttask(this.route.snapshot.queryParams['proj_id']).subscribe(res=>{
  if(res['code']==200){
    this.projecttask=res['data'];
  }
  
})



  }
  async uploadFile(event) {
    let filesdata=[];
    console.log("event",event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element);
      let reader = new FileReader();
    let result_base64 = await new Promise((resolve) => {
        reader.onload = (e: any) => {
          //console.log("e.target.result",e.target.result);
          resolve(e.target.result);
        }
        reader.readAsDataURL(element);
    });
  
    this.filesrows.push(this.makefileobject(null,element.name,element.size,result_base64))
    console.log("imageform",this.filesrows);
    } 
    
    this.projectservice.insertfile(this.filesrows.value,this.route.snapshot.queryParams['proj_id']).subscribe(res=>{

      console.log("file res=>",res);
      if(res['code']==200){
          this.snackbar.open('File Uploaded Successfully', 'Ok', {
            duration: 30000,
            panelClass: ['blue-snackbar'] 

          });
           location.reload();
        
      }
    }) 
  }
  makefileobject(id,filename,size,base64):FormGroup {
    return this.fb.group({
      image_id:id,
      filename: filename,
      size: size,
      base64: base64
    });
  }
  createtask(){
    this.Dialog.open(CreateTaskComponent, {
      data:this.route.snapshot.queryParams['proj_id'] || null,
      width: '600px'
    });
  }

}
