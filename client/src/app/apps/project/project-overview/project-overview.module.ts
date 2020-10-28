import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectOverviewComponent} from './project-overview.component'
import {ProjectOverviewRoutingModule} from './project-overview-routing.module'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {CreateTaskModule} from '../../to-do-list/create-task/create-task.module'
import {MatMenuModule} from '@angular/material/menu';
import {CreateMilestoneModule} from '../create-milestone/create-milestone.module'
@NgModule({
  declarations: [ProjectOverviewComponent],
  imports: [
    CommonModule,
    ProjectOverviewRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    CreateTaskModule,
    MatMenuModule,
    CreateMilestoneModule
  ]
})
export class ProjectOverviewModule { }
