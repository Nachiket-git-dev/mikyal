import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoicePreviewComponent } from './invoice-preview.component';
import { mykylRoutes } from '../../../../../@mikyl/mikyl_routing_interface';


const routes: mykylRoutes = [
  
  {
    path: '',
    component: InvoicePreviewComponent,
  
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicePreviewRoutingModule { }
