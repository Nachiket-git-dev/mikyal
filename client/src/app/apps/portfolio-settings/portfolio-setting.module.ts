import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioSettingRoutingModule} from './portfolio-setting-routing.module'
import {PortfolioSettingsComponent} from './portfolio-settings.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [PortfolioSettingsComponent],
  imports: [
    CommonModule,
    PortfolioSettingRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PortfolioSettingModule { }
