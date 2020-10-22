import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {AddCardComponent} from './add-card/add-card.component'
import {CreateListComponent} from './create-list/create-list.component'
import { trackById } from '../../../../@mikyl/utils/track-by';
import { scrumboards, scrumboardUsers } from '../../../static-data/scrumboard';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {ScrumBoardService} from './scrum-board.service'
import * as $ from 'jquery/dist/jquery.min.js';
@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit {

  addCardCtrl = new FormControl();
  addListCtrl = new FormControl();
  scrumboardUsers = scrumboardUsers;
  allcards:any;
  alllist:any;
  trackById = trackById;
  constructor(private dialog:MatDialog,private route: ActivatedRoute,private scrumservice:ScrumBoardService) { }
  
  board$ = this.route.paramMap.pipe(
    map(paramMap => +paramMap.get('scrumboardId')),
    map(scrumboardId => this.getalllists())
  );
  ngOnInit() {
    this.scrumservice.getlists().subscribe(res =>{
      console.log("reslist",res);
      if(res['code']==200){
       this.alllist=res['data'];
      
      }
    })
     
    this.scrumservice.getallcards().subscribe(res=>{
       
      console.log("res",res);
      if(res['code']==200){
        this.allcards=res['data'];
      }

    })
  }
   async getalllists(){
    return new Promise(async (resolve, reject) => {
    console.log("get all list");
    this.scrumservice.getlists().subscribe(res =>{
      console.log("reslist",res);
      if(res['code']==200){
       this.alllist=res['data'];
       resolve(res['data']);
      }
    })
  }) 

  }
  createcard(listid){
    const dialogRef = this.dialog.open(AddCardComponent,{
      data:listid
    });
  }
   sbc_card_Show() {
     console.log("cvb");
    document.getElementById("acme-aplication").classList.toggle('active');
}
 sbc_card_Close() {
  document.getElementById("acme-aplication").classList.remove('active');
}
dropdown_show(){
  $('.dropdown_content').addClass('dropdown_show');
}

drop(event: CdkDragDrop<any[]>) {
  
  event.item.data.scrum_id=event.container.id;
  let updatedata={
    id:event.item.data.id,
    scrum_id:event.container.id
  }
  this.scrumservice.changelist(updatedata).subscribe(res=>{
    console.log("res update=>",res);
  })
  if (event.previousContainer === event.container) {
    event.item.data.scrum_id=event.container.id;
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    //event.item.data.scrum_id=event.previousContainer.id;
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}

dropList(event: CdkDragDrop<any[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}

getConnectedList(board) {
 
  return board.map(x => `${x.id}`);
}
getchildlist(board){
return this.allcards.filter(card=>card.scrum_id ==board.id);
//return  board.children;
}
 
 add_card_Show() {
  $('.add-card-overlay').addClass('active');
}

 add_card_Close(){
  $('.add-card-overlay').removeClass('active');
}
//add board popup
 add_board_Show() {
  const dialogRef = this.dialog.open(CreateListComponent);
}


 
}
