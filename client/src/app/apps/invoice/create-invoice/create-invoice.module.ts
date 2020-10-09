import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateInvoiceRoutingModule} from './create-invoice-routing.module'
import {CreateInvoiceComponent} from './create-invoice.component'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [CreateInvoiceComponent],
  imports: [
    CommonModule,
    CreateInvoiceRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    
    FormsModule

  ]
})
export class CreateInvoiceModule { }
