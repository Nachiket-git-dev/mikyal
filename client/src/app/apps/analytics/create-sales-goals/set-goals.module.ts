import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateSalesGoalsComponent} from './create-sales-goals.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateSalesGoalsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[CreateSalesGoalsComponent],
  entryComponents:[CreateSalesGoalsComponent]
})
export class SetGoalsModule { }
