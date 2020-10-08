import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddCardComponent} from  './add-card.component'
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [AddCardComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  entryComponents:[AddCardComponent],
  exports:[AddCardComponent]
})
export class AddCardModule { }
