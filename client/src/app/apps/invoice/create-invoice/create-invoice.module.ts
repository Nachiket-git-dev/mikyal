import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateInvoiceRoutingModule} from './create-invoice-routing.module'
import {CreateInvoiceComponent} from './create-invoice.component'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [CreateInvoiceComponent],
  imports: [
    CommonModule,
    CreateInvoiceRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    FormsModule

  ]
})
export class CreateInvoiceModule { }
