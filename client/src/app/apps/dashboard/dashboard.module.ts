import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component'
import {DashboardRoutingModule} from './dashboard-routing.module'
import {DashboardRightbarComponent} from './dashboard-rightbar/dashboard-rightbar.component'
@NgModule({
  declarations: [DashboardComponent,DashboardRightbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
