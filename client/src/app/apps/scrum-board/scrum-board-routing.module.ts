import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { ScrumBoardComponent} from './scrum-board.component'

const routes:Routes=[
  {
    path: '',
    redirectTo: '1'
  },
  {
    path: ':scrumboardId',
    component:ScrumBoardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumBoardRoutingModule { }
