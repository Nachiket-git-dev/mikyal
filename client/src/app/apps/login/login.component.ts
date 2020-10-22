import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from './login.service'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router,private fb: FormBuilder,private  loginservice :LoginService,private snackbar: MatSnackBar,) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  login(){
    this.loginservice.login(this.form.value).subscribe((response) => {
     console.log(response);
     if(response['code']==200){
      const userData = response['data']['response'];
      localStorage.setItem('userToken',response['data']['token'] ); 
      localStorage.setItem('userData', JSON.stringify(userData)); 
      localStorage.setItem("Database_Name",response['data']['username']);
      console.log("localsoratge data",localStorage.getItem('userData'));
      console.log(localStorage.getItem('Database_Name'));
      console.log("token",localStorage.getItem('userToken'));
      this.snackbar.open('login SuccessFull', 'OK', {
        duration: 10000,
        panelClass: ['blue-snackbar']
      });
      this.router.navigate(['/invoice']);  
     }else{

     }
     let userdata=this.loginservice.getUserData();
     localStorage.setItem("Database_Name",userdata[0]['username']);
     localStorage.setItem("store_name",userdata[0]['Store_name']);
     console.log("store_name",localStorage.getItem('store_name'));
    },error=>{
      this.snackbar.open('Invalid Username Password', 'OK', {
        duration: 10000,
        panelClass: ['blue-snackbar']
      });
    })

  }

}
