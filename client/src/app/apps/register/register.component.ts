import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RegisterService} from './register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  showloader=false;
  inputType = 'password';
  visible = false;
  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,private snackBar:MatSnackBar
    ,private registerservice:RegisterService) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      //terms: ['', [Validators.required]],
     
     //username:['', Validators.required]
    });
  }
  get f() { return this.form.controls; }
  
  send() {
    console.log("this.form=>",this.form);
    if (this.form.invalid) {
      this.snackBar.open('All fields are mandetory and must be valid ', 'OK', {
        duration: 10000
      });
      return;
  }
    this.showloader=true;
    this.registerservice.createuser(this.form.value).subscribe(res=>{
      if(res['message']=='Success' ){
        this.showloader=false;
        this.snackBar.open('Account Is Created SuccessFully Plase Login To your Account ', 'OK', {
          duration: 10000
        });
        this.router.navigate(['/']);
      }
      
    },
    err=>{
   console.log("error",err.error);
   this.snackBar.open(err.error.data, 'Ok', {
    duration: 3000
  });
  this.showloader=false;
    } )
   // this.router.navigate(['/']);
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
