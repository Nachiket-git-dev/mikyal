import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioSettingRoutingModule} from './portfolio-setting-routing.module'
import {PortfolioSettingsComponent} from './portfolio-settings.component'

@NgModule({
  declarations: [PortfolioSettingsComponent],
  imports: [
    CommonModule,
    PortfolioSettingRoutingModule
  ]
})
export class PortfolioSettingModule { }
