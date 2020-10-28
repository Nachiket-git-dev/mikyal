import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import {PortfolioServiceService} from './portfolio-service.service'
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-portfolio-settings',
  templateUrl: './portfolio-settings.component.html',
  styleUrls: ['./portfolio-settings.component.css']
})
export class PortfolioSettingsComponent implements OnInit {
  form = this.fb.group({
    header_title: [''],
    header_description:[''],
    sub_header: [''],
    content: [''],
    footer: [''],
    social_facebook: [''],
    social_twitter:[''],
    social_google:[],
  });
  constructor(private fb: FormBuilder,private portfolioservice:PortfolioServiceService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.portfolioservice.getportfolio().subscribe(portfolio=>{
      console.log("portfolio['data']",portfolio['data'][0]);
      this.form.patchValue(portfolio['data'][0]);
   })
  }
  ;
  save(){
    console.log(this.form.value);
    return
    this.portfolioservice.saveportfolio(this.form.value).subscribe(res=>{
    
      console.log("res",res)
      if(res['code']==200 ){
        this.snackbar.open('Settings successfully Save', 'Ok', {
          duration: 3000
        })
    
      }
    },err=>{
      console.log("err",err);
    })
      }
}
