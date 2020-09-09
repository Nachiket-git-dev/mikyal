import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ProjectOverviewComponent} from './project-overview.component'

const routes: Routes = [
  {
    path: '',
    component:ProjectOverviewComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectOverviewRoutingModule { }
