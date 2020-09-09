import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrumBoardComponent} from './scrum-board.component'
import {ScrumBoardRoutingModule} from './scrum-board-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {AddCardModule} from './add-card/add-card.module'
@NgModule({
  declarations: [ScrumBoardComponent],
  imports: [
    CommonModule,
    ScrumBoardRoutingModule,
    AddCardModule,
    MatDialogModule
  ]
})
export class ScrumBoardModule { }
