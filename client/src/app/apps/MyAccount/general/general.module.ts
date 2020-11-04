import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralComponent} from './general.component'
import {GeneralRoutingModule} from './general-routing.module'
import {SidemenuModule} from '../sidemenu/sidemenu.module'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SidemenuModule,
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule
  ]
})
export class GeneralModule { }
