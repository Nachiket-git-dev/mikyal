import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCardComponent} from './add-card/add-card.component'
@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  createcard(){
    const dialogRef = this.dialog.open(AddCardComponent);
  }

}
