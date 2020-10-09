import { Component, OnInit } from '@angular/core';
import {siteConfig} from 'src/app/sitesettings';
import {ToDoListService} from '../to-do-list/to-do-list.service';
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
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  constructor(private todolistservice:ToDoListService ) { 
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

  }
   isOpen=false;
   alltasks:any;
  ngOnInit() {
    // console.log("siteConfig",siteConfig[0].isOpened );
     this.todolistservice.getalltask().subscribe(res=>{
         this.alltasks=res['data'];
         console.log("alltasks",this.alltasks);

     })

    
    
  }

}
