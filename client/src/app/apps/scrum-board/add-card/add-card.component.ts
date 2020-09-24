import { Component, OnInit,Inject } from '@angular/core';
import {ScrumBoardService} from '../scrum-board.service'
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
 
  constructor(private scrumservice:ScrumBoardService, @Inject(MAT_DIALOG_DATA) public data: any
  ,private fb: FormBuilder,private snackbar:MatSnackBar) { }
  form: FormGroup;

  ngOnInit() {
    console.log("data",this.data);
    this.form = this.fb.group({
      title:['', Validators.required],
      scrum_id:this.data,
      start_date:null,
      description:null
     
     //username:['', Validators.required]
    });
  }
  createcard(){
 this.scrumservice.createcard(this.form.value).subscribe(res=>{
     if(res['code']==200){
      this.snackbar.open('Card created ', 'OK', {
        duration: 10000,
        panelClass: ['blue-snackbar']
      })
     }
 })

  }
}
