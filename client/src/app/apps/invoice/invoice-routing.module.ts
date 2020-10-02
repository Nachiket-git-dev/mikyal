import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceComponent} from './invoice.component'
const routes: Routes = [
  {
    path: '',
    component:InvoiceComponent
  },
  {
    path:'create-invoice',
    loadChildren: () => import('./create-invoice/create-invoice.module').then(m => m.CreateInvoiceModule)
  },
  {
    path:'invoice-preview',
    loadChildren: () => import('./invoice-preview/invoice-preview.module').then(m => m.InvoicePreviewModule)
  }
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
