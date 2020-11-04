import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateMilestoneComponent} from './create-milestone.component'
import { ReactiveFormsModule } from '@angular/forms'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [CreateMilestoneComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents:[CreateMilestoneComponent],
  exports:[CreateMilestoneComponent]
})
export class CreateMilestoneModule { }
