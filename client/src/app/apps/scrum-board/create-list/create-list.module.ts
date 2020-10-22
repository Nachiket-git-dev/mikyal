import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateListComponent} from './create-list.component'
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [CreateListComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  entryComponents:[CreateListComponent],
  exports:[CreateListComponent]
})
export class CreateListModule { }
