import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnalyticsComponent} from './analytics.component'
import {AnalyticsRoutingModule} from './analytics-routing.module'
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgApexchartsModule } from "ng-apexcharts";
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import {MatDialogModule} from '@angular/material/dialog';
import {SetGoalsModule} from './create-sales-goals/set-goals.module'
import { DatePipe } from '@angular/common'

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};
PlotlyModule.plotlyjs = PlotlyJS
@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    NgApexchartsModule,
    PlotlyModule,
    SwiperModule,
    MatSnackBarModule,
    SetGoalsModule,
    MatDialogModule
  ],
  
  providers: [DatePipe,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
  

})
export class AnalyticsModule { }
