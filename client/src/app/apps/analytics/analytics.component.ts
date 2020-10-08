import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };
  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }
  
  closeright(event) {
    console.log(event);
    const el = document.querySelector('.right-sidebar');
  el.className = 'right-sidebar';
  }
}
