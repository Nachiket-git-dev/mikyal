import { Component, OnInit,Inject } from '@angular/core';
import { FormControl,Validators,FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';
import {ProjectService} from '../../../services/project/project.service';
@Component({
  selector: 'app-create-milestone',
  templateUrl: './create-milestone.component.html',
  styleUrls: ['./create-milestone.component.css']
})
export class CreateMilestoneComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,private fb: FormBuilder,public dialogRef: MatDialogRef<CreateMilestoneComponent>,private projectservice:ProjectService) { }
  form = this.fb.group({
    milestone:['',Validators.required],
    stage:1,
    project_id:this.defaults
  
  });
  tasks:any;
  ngOnInit() {
  }
  newmilestone(){
    this.projectservice.createmilestone(this.form.value).subscribe(res=>{
      console.log("res=>",res);
    })
  }

}
