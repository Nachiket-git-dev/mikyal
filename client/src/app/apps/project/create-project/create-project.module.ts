import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateProjectComponent} from './create-project.component'
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule } from '@angular/material/icon';
import { CdkStepperModule } from '@angular/cdk/stepper'
import { ReactiveFormsModule } from '@angular/forms'
import { StepperOptionsComponent } from './stepper-options/stepper-options.component';
@NgModule({
  declarations: [CreateProjectComponent, StepperOptionsComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    CdkStepperModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[CreateProjectComponent],
  entryComponents:[CreateProjectComponent]
})
export class CreateProjectModule { }
