import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import {CreateSalesGoalService} from './create-sales-goal.service'
@Component({
  selector: 'app-create-sales-goals',
  templateUrl: './create-sales-goals.component.html',
  styleUrls: ['./create-sales-goals.component.css']
})
export class CreateSalesGoalsComponent implements OnInit {
  goalsform: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,private fb: FormBuilder,private salesgoalservice:CreateSalesGoalService,public dialogRef: MatDialogRef<CreateSalesGoalsComponent> ) { }

  ngOnInit() {
    this.goalsform = this.fb.group({
      id: '',
      total_goal: [this.defaults.total_goal|| '',[Validators.required]],
      goal_type:"Sale"
      
    });

    this.salesgoalservice.getusergoal().subscribe(res=>{
      console.log("all goals=>",res);
      if(res['code']==200){
        this.goalsform.patchValue(res['data'][0]);
      }
    })
  }
  setgoals(){
    console.log("this.goalsform",this.goalsform.value)
    if(this.goalsform.valid){
    this.salesgoalservice.set_goal(this.goalsform.value).subscribe(res=>{
      console.log("setgoals=>",res);
      location.reload();
     })
    }
  }
  

}
