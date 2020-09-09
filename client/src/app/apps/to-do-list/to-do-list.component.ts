import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl,Validators,FormGroup,FormArray } from '@angular/forms';
import {ToDoListService} from './to-do-list.service';
import { debounceTime } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit,OnChanges{

  searchCtrl = new FormControl();
  temptask:any;
  searchStr$ = this.searchCtrl.valueChanges.pipe(
   
    debounceTime(10)
  );
  constructor( private fb: FormBuilder,private todoservice:ToDoListService,private snackbar:MatSnackBar) {
    this.todoservice.getalltask().subscribe(res =>{
      if(res['code']==200){
        this.tasks=res['data'];
        this.temptask=res['data'];
        console.log(this.tasks);
      
      }
   
      })
   }
  form = this.fb.group({
    task_header:['',Validators.required],
    stage:0,
    notes: null,
    start_date:null,
    project_id:null
  
  });
  tasks:any;
  ngOnInit() {
    this.loadanumation();
   
    this.searchCtrl.valueChanges.subscribe(res=>{
       if(!res){
        this.tasks=this.temptask;
       }
      this.tasks=this.tasks.filter(item => item.task_header.search(new RegExp(res, 'i')) > -1 )
      
    })

  }
 
  
  closerightmenu(){
    
  const el = document.querySelector('.right-sidebar');
  el.className='right-sidebar'
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);

  }

  newtask(){
    this.todoservice.createtask(this.form.value).subscribe(res =>{
      console.log(res);
      if(res['code']==200){
        this.snackbar.open('task Created SuccessFully', 'OK', {
          duration: 10000,
          panelClass: ['blue-snackbar']
        });
        document.querySelector(".new-task-js").classList.remove("active");
      }
    },err=>{
      console.log(err);
    })
  }
  loadanumation(){
    document.querySelectorAll(".todo-list__text").forEach(e => {
      
      e.addEventListener("click", () => {
          document.querySelector(".edit-task-js").classList.toggle("active")
      })
  })
  document.querySelector(".btn-popup-close-edit-task").addEventListener("click", () => {
      document.querySelector(".edit-task-js").classList.remove("active")
  })

  document.querySelector(".btn-new-task").addEventListener("click", () => {
          document.querySelector(".new-task-js").classList.toggle("active")
  })
  document.querySelector(".btn-popup-close-new-task").addEventListener("click", () => {
      document.querySelector(".new-task-js").classList.remove("active")
  })

  let todoPriority = (e)=> {
    
      let elem = e.currentTarget.parentNode.parentNode;
      elem.querySelectorAll(".todo-list__priority-js").forEach(e => {
        console.log("tooltip4");
          e.classList.toggle("todo-list__priority__active")
      })
      elem.parentNode.querySelector('.tooltip_priority-js').classList.toggle('tooltip__active')
  }
  document.querySelectorAll(".todo-list__priority").forEach( elem => {
    console.log("tooltip3"); 
    elem.addEventListener("click", todoPriority)
  })

  let todoChange = (e) => {
      e.currentTarget.querySelector('.tooltip').classList.toggle('tooltip__active')
      console.log("tooltip2");
  }
  
  document.querySelectorAll(".todo-list__change").forEach( elem => {
    console.log("tooltip1");
      elem.addEventListener("click", todoChange)
  })

  }
  openlist(e){
    
    
      let elem = e.currentTarget.parentNode.parentNode;
      elem.querySelectorAll(".todo-list__priority-js").forEach(e => {
        console.log("tooltip4");
          e.classList.toggle("todo-list__priority__active")
      })
      elem.parentNode.querySelector('.tooltip_priority-js').classList.toggle('tooltip__active')
  

}
}
