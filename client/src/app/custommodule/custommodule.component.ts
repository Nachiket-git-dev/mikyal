import { Component, OnInit,ChangeDetectorRef, Inject, Input, OnDestroy,ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router,ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import Stepper from 'bs-stepper';
import {CreateProjectComponent} from '../apps/project/create-project/create-project.component';
import {CreateClientComponent} from '../apps/client/create-client/create-client.component'
@Component({
  selector: 'app-custommodule',
  templateUrl: './custommodule.component.html',
  styleUrls: ['./custommodule.component.css']
})
export class CustommoduleComponent implements OnInit {
  isOpened=false
  isheaderactive=false;
  private stepper: Stepper;
  constructor(private route:ActivatedRoute,private dialog:MatDialog,private elementRef:ElementRef) { }

  ngOnInit() {
    console.log("custom module");
    // this.stepper = new Stepper(document.querySelector('#stepper1'),
    // {
    //   linear: false,
    //   animation: true
    // })
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
}
