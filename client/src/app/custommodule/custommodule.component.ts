import { Component, OnInit,ChangeDetectorRef, Inject, Input, OnDestroy,ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router,ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import Stepper from 'bs-stepper';
import {CreateProjectComponent} from '../apps/project/create-project/create-project.component';
import {CreateClientComponent} from '../apps/client/create-client/create-client.component';
import {LoginService} from '../apps/login/login.service';
import {MyaccountService } from '../apps/MyAccount/myaccount.service'

@Component({
  selector: 'app-custommodule',
  templateUrl: './custommodule.component.html',
  styleUrls: ['./custommodule.component.css']
})
export class CustommoduleComponent implements OnInit {
  isOpened=false
  isheaderactive=false;
  private stepper: Stepper;
   first_name;
   last_name;
   userimage
  constructor(private route:ActivatedRoute,private dialog:MatDialog,private elementRef:ElementRef,
    private loginservice:LoginService,private router: Router,private myaccount:MyaccountService) { }

  ngOnInit() {
    console.log("custom module");
    // this.stepper = new Stepper(document.querySelector('#stepper1'),
    // {
    //   linear: false,
    //   animation: true
    // })
   let userdata=this.loginservice.getUserData();
   
   this.first_name=userdata[0]['first_name'];
   this.last_name=userdata[0]['last_name'];
   console.log("userdata",userdata[0]['first_name']);
   this.myaccount.getuserimage(userdata[0]['user_id']).subscribe(resimg=>{
     console.log("resimg",resimg);
      if(resimg['code']==200){
        if(resimg['data'][0].image_blob){ 
          this.userimage=window.atob(resimg['data'][0].image_blob);
          console.log("userimage",this.userimage);
          }
      }
   })
  }
  isOpen(){
    return this.isOpened;
   }

   toggleClass(){
     if(this.isOpened){
      this.isOpened=false;
     }else{
      this.isOpened=true;
     }
   }
   changeheaderclass(){
   if(this.isheaderactive){
    this.isheaderactive=false;
   }else{
    this.isheaderactive=true;
   }
   }
   isactive(activeroute){
     console.log("this.route.url",this.route.url);
     console.log("activeroute",activeroute)
     if(this.route.url===activeroute){
       return true;
     }else
       return false;
   }
   onActivate(componentReference) {
    console.log(componentReference)
   
 }
 rightmenuopen(){
  const el = document.querySelector('.right-sidebar');
  el.className += ' active';
 }
 closeleft(){
   console.log("closeclass");
  const el = document.querySelector('.right-sidebar');
  el.className='right-sidebar'
 }
 createproject(){
  this.dialog.open(CreateProjectComponent,{
    backdropClass: 'custom-modalbox'
  })
 }
 createclient(){
  this.dialog.open(CreateClientComponent,{
   
  })
 }
 ngAfterViewInit() {
  this.elementRef.nativeElement.querySelector('close-right-sidebar')
                                .addEventListener('click', this.onClick.bind(this));
}
onClick(event) {
  console.log(event);
}
logout(){

  localStorage.removeItem('userToken');
  localStorage.removeItem('userData');
  localStorage.removeItem('tour');
  this.router.navigate(['/login']);  

}

}
