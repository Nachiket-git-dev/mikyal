import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyaccountRoutingModule} from './myaccount-routing.module'
import { RouterModule } from '@angular/router';
import {GeneralModule} from './general/general.module'
import {ChangepasswordModule} from './changepassword/changepassword.module'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyaccountRoutingModule,
    RouterModule
  ]
})
export class MyaccountModule { }
