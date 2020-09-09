import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectOverviewComponent} from './project-overview.component'
import {ProjectOverviewRoutingModule} from './project-overview-routing.module'

@NgModule({
  declarations: [ProjectOverviewComponent],
  imports: [
    CommonModule,
    ProjectOverviewRoutingModule
  ]
})
export class ProjectOverviewModule { }
