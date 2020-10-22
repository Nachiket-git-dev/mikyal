import { Component, OnInit,Inject } from '@angular/core';
import { FormControl,Validators,FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';
import {ToDoListService} from '../to-do-list.service'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  form = this.fb.group({
    task_header:['',Validators.required],
    stage:1,
    notes: null,
    start_date:null,
    project_id:this.defaults
  
  });
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,private fb: FormBuilder,private todoservice:ToDoListService,
    private snackbar:MatSnackBar,public dialogRef: MatDialogRef<CreateTaskComponent>) { }

  ngOnInit() {
   
  }
  newtask(){
    
    if(this.form.value.stage==null){
      this.form.value.stage=1;
    }
    console.log("this.form.value",this.form.value);
    this.todoservice.createtask(this.form.value).subscribe(res =>{
      console.log(res);
      if(res['code']==200){
        this.snackbar.open('task Created SuccessFully', 'OK', {
          duration: 10000,
          panelClass: ['blue-snackbar']
        });
        this.dialogRef.close(true);
        document.querySelector(".new-task-js").classList.remove("active");
      }
    },err=>{
      console.log(err);
    })
  }

}
