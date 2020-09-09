import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from './to-do-list.component'

const routes: Routes = [
  {
    path: '',
    component:ToDoListComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ToDoListRoutingModule { }
