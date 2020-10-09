import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
declare var Plotly: any;
import * as Plotly from 'plotly.js';
import {Config, Data, Layout} from 'plotly.js'
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexTooltip,
  ApexMarkers,
  ApexYAxis,
  ApexFill,
  ApexGrid
} from "ng-apexcharts"
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  yaxis:ApexYAxis
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  markers:ApexMarkers;
  colors:string;
};
export type polyoption={
  data:Data,
  config:Config,
  layout:Layout

}


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
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
 public polyoption1:Partial<polyoption>
 

  constructor(private elementRef:ElementRef) {
    this.chartOptions1 = {
			series: [{
				name: "",
				data: [1, 2, 1.5, 1.8, 1.5, 3, 3.6]
			}],
			chart: {
				height: 150,
				type: "line",
				zoom: {
					enabled: !1
				},
				toolbar: {
					show: !1
				}
			},
			dataLabels: {
				enabled: !1
			},
			stroke: {
				curve: "straight",
				width: 2
			},
			grid: {
				show: !1,
				xaxis: {
					lines: {
						show: !1
					}
				},
				column: {
					colors: ["#2C2C2E", "#2C2C2E"]
				}
			},
			xaxis: {
				categories: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				
				labels: {
					style: {
						colors: "#9A9AB5",
						fontSize: "16px",
						fontFamily: "Source Sans Pro",
						fontWeight: 400,
						cssClass: "apexcharts-xaxis-label"
					}
				},
				axisBorder: {
					show: !1
				},
				axisTicks: {
					show: !1
				},
				tooltip: {
					enabled: !0
				},
				crosshairs: {
					show: !0
        } 
			},
			yaxis: {
				show: !1
			},
			colors:"546AE4",
			markers: {
				size: 1.5,
				colors: ["#2C2C2E"],
				strokeColors: "#546AE4",
				strokeWidth: 3,
				strokeOpacity: .9,
				strokeDashArray: 0,
				fillOpacity: 0,
				discrete: [],
				shape: "circle",
				radius: 2,
				offsetX: 0,
				offsetY: 0,
				onClick: void 0,
				onDblClick: void 0,
				showNullDataPoints: !0,
				hover: {
					size: 4
				}
			},
			tooltip: {
				enabled: !0,
				custom: function (e) {
					var t = e.series,
						o = e.seriesIndex,
						a = e.dataPointIndex;
					e.w;
					return '<div class="apexcharts-tooltip-custom">'.concat('<span class="apexcharts-tooltip-custom__circle"></span><span class="apexcharts-tooltip-custom__line"></span><span>$').concat(t[o][a], "</span></div>")
				},
				style: {
					fontSize: "16px",
					fontFamily: "Source Sans Pro"
				},
				onDatasetHover: {
					highlightDataSeries: !1
				},
				x: {
					show: !1
				},
				marker: {
					show: !0
				}
			}
    }

this.chartOptions2={
  series: [{
    name: "",
    data: [1, 2, 1.5, 1.8, 1.5, 3, 3.6]
  }],
  chart: {
    height: 150,
    type: "line",
    zoom: {
      enabled: !1
    },
    toolbar: {
      show: !1
    }
  },
  dataLabels: {
    enabled: !1
  },
  stroke: {
    curve: "straight",
    width: 2
  },
  grid: {
    show: !1,
    xaxis: {
      lines: {
        show: !1
      }
    },
    column: {
      colors: ["#2C2C2E", "#2C2C2E"]
    }
  },
  xaxis: {
    categories: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
   
    labels: {
      style: {
        colors: "#9A9AB5",
        fontSize: "16px",
        fontFamily: "Source Sans Pro",
        fontWeight: 400,
        cssClass: "apexcharts-xaxis-label"
      }
    },
    axisBorder: {
      show: !1
    },
    axisTicks: {
      show: !1
    },
    tooltip: {
      enabled: !0
    },
    crosshairs: {
      show: !0
    }
  },
  yaxis: {
    show: !1
  },
  colors: "#546AE4",
  markers: {
    size: 1.5,
    colors: ["#2C2C2E"],
    strokeColors: "#546AE4",
    strokeWidth: 3,
    strokeOpacity: .9,
    strokeDashArray: 0,
    fillOpacity: 0,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    onClick: void 0,
    onDblClick: void 0,
    showNullDataPoints: !0,
    hover: {
      size: 4
    }
  },
  tooltip: {
    enabled: !0,
    custom: function (e) {
      var t = e.series,
        o = e.seriesIndex,
        a = e.dataPointIndex;
      e.w;
      return '<div class="apexcharts-tooltip-custom">'.concat('<span class="apexcharts-tooltip-custom__circle"></span><span class="apexcharts-tooltip-custom__line"></span><span>$').concat(t[o][a], "</span></div>")
    },
    style: {
      fontSize: "16px",
      fontFamily: "Source Sans Pro"
    },
    onDatasetHover: {
      highlightDataSeries: !1
    },
    x: {
      show: !1
    },
    marker: {
      show: !0
    }
  }
}

this.polyoption1={
  data: [
    {
      values: [4, 10],
      name: "",
      hoverinfo: "none",
      hole: .7,
      type: "pie",
      marker: {
        colors: ["#2C2C2E", "#48C2A5"],
        line: {
          color: "#1B1B1D",
          width: 8
        }
      },
      textposition: "none"
    }
  ],
  layout: {width: 320, height: 240, title: 'A Fancy Plot'}
}


   }

  ngOnInit() {
    if (document.querySelector("#dashboard-chart-sales-goals")) {
      Plotly.newPlot("dashboard-chart-sales-goals", [{
        values: [4, 10],
        name: "",
        hoverinfo: "none",
        hole: .7,
        type: "pie",
        marker: {
          colors: ["#2C2C2E", "#48C2A5"],
          line: {
            color: "#1B1B1D",
            width: 8
          }
        },
        textposition: "none"
      }], {
        height: 253,
        margin: {
          t: 10,
          l: 0,
          r: 0,
          b: 20
        },
        annotations: [{
          font: {
            size: 26,
            family: "Source Sans Pro",
            color: "#D7DAE5"
          },
          showarrow: !1,
          text: "<span>$ 24.546</span><br>62,2%",
          x: .5,
          y: .5
        }],
        showlegend: !1
      }, {
        displayModeBar: !1
      })
  }
}
  
  closeright(event) {
    console.log(event);
    const el = document.querySelector('.right-sidebar');
  el.className = 'right-sidebar';
  }
}
