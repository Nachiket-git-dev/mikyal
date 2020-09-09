import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from './project.component'
import {ProjectRoutingModule} from './project-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
   ProjectRoutingModule
  ]
})
export class ProjectModule { }
