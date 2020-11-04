import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateProjectComponent} from './create-project.component'
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule } from '@angular/material/icon';
import { CdkStepperModule } from '@angular/cdk/stepper'
import { ReactiveFormsModule } from '@angular/forms'
import { StepperOptionsComponent } from './stepper-options/stepper-options.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CreateProjectComponent, StepperOptionsComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    CdkStepperModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[CreateProjectComponent],
  entryComponents:[CreateProjectComponent]
})
export class CreateProjectModule { }
