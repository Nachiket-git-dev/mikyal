import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { mykylRoutes } from '../../../../../@mikyl/mikyl_routing_interface';


const routes: mykylRoutes = [
  {
    path: '',
    component: GeneralComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
