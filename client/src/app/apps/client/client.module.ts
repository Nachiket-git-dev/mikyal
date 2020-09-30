import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientComponent} from './client.component'
import {ClientRoutingModule} from './client-routing.module';
import {CreateClientModule} from './create-client/create-client.module'
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu'
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatDialogModule,
    CreateClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class ClientModule { }
