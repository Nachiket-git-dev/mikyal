import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ScrumBoardService} from '../scrum-board.service'
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor(private fb: FormBuilder,private scrumboardservice:ScrumBoardService,private snackbar: MatSnackBar) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      name:['', Validators.required],
     description:null
     
     //username:['', Validators.required]
    });

  }
  createlist(){
    if(!this.form.valid){
      console.log("not valid");
    }else{
      console.log(this.form.value);
      this.scrumboardservice.createlist(this.form.value).subscribe(res=>{
        if(res['code']==200){
          this.snackbar.open('list created ', 'OK', {
            duration: 10000,
            panelClass: ['blue-snackbar']
          })
          location.reload();
         }
       
      }
        
        
        )

    }
  }

}
