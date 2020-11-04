import { Component, OnInit,OnChanges,SimpleChanges,Directive,Input,Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl,Validators,FormGroup,FormArray } from '@angular/forms';
import {ToDoListService} from './to-do-list.service';
import { debounceTime } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import paginate from 'jw-paginate';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  
})

export class ToDoListComponent implements OnInit,OnChanges{
 
  searchCtrl = new FormControl();
  temptask:any;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 9;
  @Input() maxPages = 100;
  pageOfItems: Array<any>;
  pager: any = {};
  indexcount=0;
  donecount=0;
  imporortantcount=0;
  searchStr$ = this.searchCtrl.valueChanges.pipe(
 
    debounceTime(10)
  );
  stageclass;
  
  constructor( private fb: FormBuilder,private todoservice:ToDoListService,private snackbar:MatSnackBar) {
    this. getalltask();
   }
  form = this.fb.group({
    task_header:['',Validators.required],
    stage:1,
    notes: null,
    start_date:null,
    project_id:null
  
  });
  getalltask(){
    this.todoservice.getalltask().subscribe(res =>{
      if(res['code']==200){
        this.tasks=res['data'];
        this.temptask=res['data'];
        console.log(this.tasks);
        this.setPage(this.initialPage);
        this.indexcount=this.temptask.length;
        this.donecount=this.tasks.filter(c => c.isdone==1).length;
        this.imporortantcount=this.tasks.filter(c => c.stage==2 && c.isdone==0).length;
        }
   
      })

  }
  tasks:any;
  ngOnInit() {
    this.stageclass=[
      {
        class:'todo-list__priority todo-list__priority-js todo-list__priority__low'
      },
      {
        class:'todo-list__priority todo-list__priority-js todo-list__priority__medium'
      },
      {
        class:'todo-list__priority todo-list__priority-js todo-list__priority__high'
      },
  
  
    ]
    this.loadanumation();
   
    this.searchCtrl.valueChanges.subscribe(res=>{
       if(!res){
        this.pageOfItems=this.temptask;
       }
      this.pageOfItems=this.pageOfItems.filter(item => item.task_header.search(new RegExp(res, 'i')) > -1 )
      
    })
  }
  clearForm() {
    this.form.reset();
   }
  
  closerightmenu(){
    
  const el = document.querySelector('.right-sidebar');
  el.className='right-sidebar'
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
        this.getalltask();
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
          e.classList.toggle("todo-list__priority__active")
      })
      elem.parentNode.querySelector('.tooltip_priority-js').classList.toggle('tooltip__active')
  }
  document.querySelectorAll(".todo-list__priority").forEach( elem => {
      elem.addEventListener("click", todoPriority)
  })

  let todoChange = (e) => {
      e.currentTarget.querySelector('.tooltip').classList.toggle('tooltip__active')
  }
  document.querySelectorAll(".todo-list__change").forEach( elem => {
      elem.addEventListener("click", todoChange)
  })
  
  }
  openlist(e){
     console.log("openlist call");
      // let elem = e.currentTarget.parentNode.parentNode;
      // console.log("elem",elem.parentNode);
      // elem.querySelectorAll(".todo-list__priority-js").forEach(e => {
      //   console.log("tooltip4",e);
      //     e.classList.toggle("todo-list__priority__active")
      // })
      // elem.parentNode.querySelector('.tooltip_priority-js').classList.toggle('tooltip__active')
      let todoPriority = (e)=> {
        let elem = e.currentTarget.parentNode.parentNode;
        elem.querySelectorAll(".todo-list__priority-js").forEach(e => {
            e.classList.toggle("todo-list__priority__active")
        })
        elem.parentNode.querySelector('.tooltip_priority-js').classList.toggle('tooltip__active')
    }
    document.querySelectorAll(".todo-list__priority").forEach( elem => {
     
        elem.addEventListener("click", todoPriority)
    })
  

}
stageselect(e,row){
  console.log("e",e.target.value);
  console.log(row);
    
    const index = this.tasks.findIndex(c => c === row);
    console.log("index",index);
    this.tasks[index].stage = e.target.value;
    //this.subject$.next(this.project);
    console.log(row.stage);
    let stagedata={
      stage:e.target.value,
      task_id:row.task_id
    }
    this.todoservice.taskstage(stagedata).subscribe(res=>{
      if(res['message']=="Success"){
        console.log("res",res);
        // this.snackbar.open('Status Updated SuccessFully', 'Ok', {
        //   duration: 3000
        // });
      }
      
    })

}
checkboxstatus(event, activity){
  console.log("event",event);
  console.log("activity",activity);
  const index = this.tasks.findIndex(c => c.task_id ===activity.task_id );
  console.log("index",index);
  this.tasks[index].isdone=event.target.checked;
  
   let status={
      isdone: event.target.checked ? 1 : 0,
      task_id:activity.task_id
   }  
 this.todoservice.updateisdone(status).subscribe(res=>{

  console.log("res",res)
 },err=>{

  console.log("err",err);
 })
}
deletetask(activity){

  console.log("delete log",activity);
   this.todoservice.deletetask(activity.task_id).subscribe(res=>{

    console.log("res",res);
    if(res['code']==200){
    let index= this.tasks.findIndex(c=>c.task_id==activity.task_id);
    this.tasks.splice(index,1);
    this.getalltask();
    }
    
   })
}
updatetask(activity){
  this.form.patchValue(activity);
  document.querySelector(".new-task-js").classList.toggle("active");
  

}

prioritytask(priority){
 if(priority=='Important'){
  this.pageOfItems=this.tasks.filter(c => c.stage==2 && c.isdone==0);
 }
 if(priority=='All'){
  this.pageOfItems=this.temptask;
 }
  if(priority=='done'){
    this.pageOfItems=this.tasks.filter(c => c.isdone==1);
  }
}
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}
ngOnChanges(changes: SimpleChanges) {
  // reset page if items array has changed
  if (changes.clients.currentValue !== changes.clients.previousValue) {
    this.setPage(this.initialPage);
  }
}
 setPage(page: number) {
  // get new pager object for specified page
  console.log("page",page);
  this.pager = paginate(this.tasks.length, page, this.pageSize, this.maxPages);

  // get new page of items from items array
  var pageOfItems = this.tasks.slice(this.pager.startIndex, this.pager.endIndex + 1);
  console.log("pageOfItems",pageOfItems);
  // call change page function in parent component
  this.onChangePage(pageOfItems);
  this.changePage.emit(pageOfItems);
}




}
