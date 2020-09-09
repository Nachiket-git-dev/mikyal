import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortfolioSettingsComponent} from './portfolio-settings.component'
 const routes:Routes =[
   {
    path: '',
    component:PortfolioSettingsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioSettingRoutingModule { }
