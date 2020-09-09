import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidemenuModule} from '../sidemenu/sidemenu.module'
import {ChangepasswordComponent} from  './changepassword.component'
import {ChangepasswordRoutingModule} from './changepassword-routing.module'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [ChangepasswordComponent],
  imports: [
    CommonModule,
    SidemenuModule,
    ChangepasswordRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule
  ]
})
export class ChangepasswordModule { }
