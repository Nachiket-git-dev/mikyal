import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from './project.component'
import {ProjectRoutingModule} from './project-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectService } from '../../services/project/project.service';
import {CreateTaskModule} from '../to-do-list/create-task/create-task.module';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    CreateTaskModule
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
