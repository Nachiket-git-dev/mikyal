import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustommoduleComponent } from './custommodule/custommodule.component';
import { mykylRoutes } from '../../@mikyl/mikyl_routing_interface';
import { 
  AuthGuard as AuthGuard 
} from './auth/auth.guard';
const childroute:mykylRoutes=[
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path:'dashboard',
    canActivate: [AuthGuard],
    loadChildren:() => import('./apps/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    canActivate: [AuthGuard],
    path:'project',
    loadChildren:() => import('./apps/project/project.module').then(m=>m.ProjectModule)
  },
  {
    canActivate: [AuthGuard],
    path:'portfolio-setting',
    loadChildren:() => import('./apps/portfolio-settings/portfolio-setting.module').then(m=>m.PortfolioSettingModule)
  },
  {
    canActivate: [AuthGuard],
    path:'overview/project-overview',
    loadChildren:() =>import('./apps/project/project-overview/project-overview.module').then(m=>m.ProjectOverviewModule)

  },
  {
    canActivate: [AuthGuard],
    path:'myaccount',
    loadChildren:() =>import('./apps/MyAccount/myaccount.module').then(m=>m.MyaccountModule)
  },
  {
    canActivate: [AuthGuard],
    path:'client',
    loadChildren:() =>import('./apps/client/client.module').then(m=>m.ClientModule)
  },
  {
    canActivate: [AuthGuard],
    path:'invoice',
    loadChildren:() =>import('./apps/invoice/invoice.module').then(m=>m.InvoiceModule)
  },
  {
    path:'to-do-list',
    loadChildren:() =>import('./apps/to-do-list/to-do-list.module').then(m=>m.ToDoListModule)
  },
  {
    canActivate: [AuthGuard],
    path:'analytics',
    loadChildren:() =>import('./apps/analytics/analytics.module').then(m=>m.AnalyticsModule)
  },
  {
    canActivate: [AuthGuard],
    path:'scrumboard',
    loadChildren:() =>import('./apps/scrum-board/scrum-board.module').then(m=>m.ScrumBoardModule)
  },
  {
    canActivate: [AuthGuard],
    path:'calendar',
    loadChildren:() =>import('./apps/calendar/calendar.module').then(m=>m.CalendarModule)
  }

];
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
   //loadChildren: () => import('./apps/login/login.module').then(m => m.LoginModule),
   
  },
  {
    path:'login',
    loadChildren: () => import('./apps/login/login.module').then(m => m.LoginModule)
  },
 
  {
    path: '',
    component: CustommoduleComponent,
    children:childroute 
  }
  // {
  //   path: 'apps',
  //   component: CustommoduleComponent,
  //   children:[{
  //     path:"project",
  //     component:ProjectComponent
  //   }]

  // }
];
console.log("routes",routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
