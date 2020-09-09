import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BillingsettingRoutingModule} from './billingsetting-routing.module'
import {BillingsettingsComponent} from './billingsettings.component'
import {SidemenuModule} from '../sidemenu/sidemenu.module'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [BillingsettingsComponent],
  imports: [
    CommonModule,
    BillingsettingRoutingModule,
    SidemenuModule,
    RouterModule
  ]
})
export class BillingsettingModule { }
