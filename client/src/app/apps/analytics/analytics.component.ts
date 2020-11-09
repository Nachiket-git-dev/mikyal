import { Component, OnInit,ViewChild,ElementRef,Inject } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import {MatSnackBar} from '@angular/material/snack-bar';
declare var Plotly: any;
import * as Plotly from 'plotly.js';
import {MatDialog} from '@angular/material/dialog';
import {CreateSalesGoalService} from './create-sales-goals/create-sales-goal.service'
import {CreateSalesGoalsComponent} from './create-sales-goals/create-sales-goals.component'
import {AnalyticsService} from './analytics.service'
import {InvoiceService} from '../invoice/invoice.service'
import { DatePipe } from '@angular/common'
import {ProjectService} from '../../services/project/project.service'
import {ClientService} from '../client/client.service'
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
  saleseriesdata:any[]=[];
  weeksdays:any[]=[]
  showchart=false;
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
  salegoal=0;
 public polyoption1:Partial<polyoption>
 

  constructor(private elementRef:ElementRef ,private snackbar:MatSnackBar,
    private dialog:MatDialog,private salesgolasservice:CreateSalesGoalService
    ,private analyticsservice:AnalyticsService,private invoiceservice:InvoiceService,
    public datepipe: DatePipe,private projectservice:ProjectService,private clinetservice:ClientService)  {
    this.salesgolasservice.getusergoal().subscribe(res=>{
      if(res['code']==200){
        this.salegoal=res['data'][0].total_goal;
       
      }
    })
    var beforeOneWeek = new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000)
    , day = beforeOneWeek.getDay()
    , diffToMonday = beforeOneWeek.getDate() - day + (day === 0 ? -6 : 1)
    , lastMonday = new Date(beforeOneWeek.setDate(diffToMonday))
    , lastSunday = new Date(beforeOneWeek.setDate(diffToMonday + 6));
    
    var lastmondy= this.datepipe.transform(lastMonday, 'yyyy-MM-dd');
    var lastsuday=this.datepipe.transform(lastSunday, 'yyyy-MM-dd');
    var days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
     this.invoiceservice.getinvoicebydaterange(lastmondy,lastsuday).subscribe(res=>{
       console.log("date_inv=>",res);
         if(res['code']==200){
           this.showchart=true;
           let day=1;
           let lastdates= new Date(lastmondy);
           console.log(res['data']);
           for(day=1;day<7;day++){
            lastdates.setDate(lastdates.getDate());
            let filerinvoice=res['data'].filter(c=>this.datepipe.transform(c.paiddate, 'yyyy-MM-dd')==this.datepipe.transform(lastdates, 'yyyy-MM-dd'))
            
            console.log("Day",lastdates.getDate());
            if(filerinvoice.length>0){
              let total=0
              filerinvoice.forEach(element => {
              total+=element.total;
              this.saleseriesdata.push(total);
              this.weeksdays.push(days[lastdates.getDay()]);
            });
            this.showprofitshart(this.saleseriesdata,this.weeksdays);
            this.totalrevinewchart(this.saleseriesdata,this.weeksdays);
            console.log("this.saleseriesdata", this.saleseriesdata);
          }
          lastdates.setDate(lastdates.getDate()+1);
           }
           
          // res['data'].forEach(element => {
           
          //   if(element.paiddate!=null){
              
          //   }
          // });
         }

     })
    



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
    this.analyticsservice.getpaidinvoice().subscribe(res=>{
       console.log("paid invoice=>",res);
       let totalsale=0;
       if(res['code']==200){
       res['data'].forEach(element => {
        totalsale+=element.total;
        console.log("this.salegoal",this.salegoal);
        this.showgoalchart( totalsale,this.salegoal)
       });
      }
    })
    
}

showgoalchart(achive,totalgoal){
  let deff=0;
   if(totalgoal<achive){
    deff=0
   }else{
    deff=totalgoal-achive
   }
  if (document.querySelector("#dashboard-chart-sales-goals")) {
    Plotly.newPlot("dashboard-chart-sales-goals", [{
      values: [deff, totalgoal],
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
        text: "<span>$" +totalgoal+"</span><br>62,2%",
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
  salesgoals(){
    this.dialog.open(CreateSalesGoalsComponent,{
      data:'',
      // panelClass: 'custom-dialog-container'
    })
  }
  showprofitshart(seriesdata,weekdays){
    this.chartOptions1 = {
			series: [{
				name: "",
				data: seriesdata
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
				categories: weekdays,
				
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

  }
  totalrevinewchart(seriesdata,weekdays){
    this.chartOptions2={
      series: [{
        name: "",
        data: seriesdata
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
        categories: weekdays,
       
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
 
}
