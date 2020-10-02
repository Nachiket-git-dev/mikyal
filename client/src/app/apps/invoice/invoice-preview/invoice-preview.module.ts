import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvoicePreviewComponent} from './invoice-preview.component'
import {InvoicePreviewRoutingModule} from './invoice-preview-routing.module'

@NgModule({
  declarations: [InvoicePreviewComponent],
  imports: [
    CommonModule,
    InvoicePreviewRoutingModule
  ]
})
export class InvoicePreviewModule { }
