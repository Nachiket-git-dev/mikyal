import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MyaccountService} from '../myaccount.service'
import {LoginService} from '../../login/login.service'
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  form: FormGroup;
  userid
  files: any = [];
  imageprivew
  constructor(private fb: FormBuilder,private myaccountservice:MyaccountService,
    private loginservice:LoginService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      bio:null,
      phone: [null, [Validators.pattern("[0-9 ]{10}")]],
      address: null,
      name:null,
      company: null,
      job_title:null,
      image_blob:null,
      email:{
        value: '',
        disabled: true
      },
      dob: null,
      gender: null,
      country:null
     //username:['', Validators.required]
    });
    let userData=this.loginservice.getUserData();
    console.log("userData",userData);
    if(userData){
      this.userid = userData[0]['user_id'];
      this.myaccountservice.getuserdetails(this.userid).subscribe(res=>{
        console.log("res",res);
        this.form.patchValue(res['data'][0]);
        this.form.patchValue({email:userData[0]['email']});
        console.log(this.form.value.name);
        if(!this.form.value.name){
          console.log("inside if");
          let name=userData[0].first_name+" "+userData[0].last_name;
          this.form.patchValue({
            name:name
          })
        }
     },err=>{

       console.log("err",err);
     })
    }
  }
  get f() { return this.form.controls; }
  save(){
    this.form.patchValue({image_blob:this.imageprivew});
    let userData=this.loginservice.getUserData();
    
    if(userData){
      this.userid = userData[0]['user_id'];
     this.myaccountservice.updateuserdetails( this.userid,this.form.value).subscribe(res=>{
       console.log("res",res);
     if(res['code']==200){
      
      this.snackbar.open('Updated', 'OK', {
        duration: 10000,
        panelClass: ['blue-snackbar']
      });
     }

   })

    }

  }
  async uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element);
      let reader = new FileReader();
      this.imageprivew = await new Promise((resolve) => {
        reader.onload = (e: any) => {
          resolve(e.target.result);
        }
        reader.readAsDataURL(element);
    });
    }  
    console.log("this.imageprivew",this.imageprivew);
  }
  

}
