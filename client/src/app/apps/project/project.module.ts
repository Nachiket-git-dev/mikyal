import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from './project.component'
import {ProjectRoutingModule} from './project-routing.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectService } from '../../services/project/project.service';
import {CreateTaskModule} from '../to-do-list/create-task/create-task.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    CreateTaskModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule { }
