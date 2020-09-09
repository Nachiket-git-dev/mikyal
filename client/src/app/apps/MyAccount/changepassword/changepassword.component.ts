import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MyaccountService} from '../myaccount.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import {LoginService} from '../../login/login.service'
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder,private myaccountservice:MyaccountService,
    private snackbar:MatSnackBar,private router:Router,
    private loginservice:LoginService) { }

  ngOnInit() {
    this.form = this.fb.group({
      newpassword:['',Validators.required],
      oldpassword: ['',Validators.required],
      user_id:null,
      confirmed:['',Validators.required]
     //username:['', Validators.required]
    },{ validator: this.checkPasswords });
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.newpassword.value;
  let confirmPass = group.controls.confirmed.value;

  return pass === confirmPass ? null : { notSame: true }
}
checkpassword(){
  let pass=this.form.value.newpassword;
  let confirmPass=this.form.value.confirmed
  return pass === confirmPass ? null :  true 
}
changepassword(){
  console.log("password click");
  if(this.checkpassword()){
    this.snackbar.open('Password not matching', 'Ok', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
    return
   }
  
  if(!this.form.valid){
    this.snackbar.open('All fields are mandetory', 'Ok', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
    return
   }
  
  let userdata=this.loginservice.getUserData();
   let userid = userdata[0]['user_id'];
   this.form.value.user_id=userid;
   this.myaccountservice.changepassword(this.form.value).subscribe(res=>{
    console.log("res",res);
   if(res['message']=='Success' && res['code']==200){
    this.snackbar.open('Password Updated SuccessFully Please Login Again', 'Ok', {
      duration: 3000
    });
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
   },err=>{
  
      this.snackbar.open('Invalid Old Password', 'Ok', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      })
    
     
   })
   
}


}
