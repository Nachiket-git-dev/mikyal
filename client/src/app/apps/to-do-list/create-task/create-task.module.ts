import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateTaskComponent} from './create-task.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [CreateTaskComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  entryComponents:[CreateTaskComponent],
  exports:[CreateTaskComponent]
})
export class CreateTaskModule { }
