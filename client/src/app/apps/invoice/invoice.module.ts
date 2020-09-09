import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvoiceComponent} from './invoice.component';
import {InvoiceRoutingModule} from './invoice-routing.module'
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule
  ]
})
export class InvoiceModule { }
