import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnalyticsComponent} from './analytics.component'
import {AnalyticsRoutingModule} from './analytics-routing.module'
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgApexchartsModule } from "ng-apexcharts";
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js'

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
  ],
  
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
  

})
export class AnalyticsModule { }
