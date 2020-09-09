import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mykylRoutes } from '../../../../@mikyl/mikyl_routing_interface';


const routes: mykylRoutes = [
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full',
  },
  {
    path: 'general',
     loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)

  },
  {
    path: 'changepassword',
     loadChildren: () => import('./changepassword/changepassword.module').then(m => m.ChangepasswordModule)
  },
  {
        path: 'billingsetting',
        loadChildren: () => import('./billingsettings/billingsetting.module').then(m => m.BillingsettingModule)
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyaccountRoutingModule { }
