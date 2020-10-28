import { Component, OnInit } from '@angular/core';
import {siteConfig} from 'src/app/sitesettings';
import { SwiperOptions } from 'swiper';
import {InvoiceService} from '../invoice/invoice.service'
import { DatePipe } from '@angular/common'
import {ProjectService} from '../../services/project/project.service'
import {ClientService} from '../client/client.service'
import {LoginService} from '../login/login.service'
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
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  paidinvoice:any[];
  saleseriesdata:any[]=[];
  weeksdays:any[]=[]
  allprojects:any[]
  allclient:any[]
  username
  greet='';
  
  constructor(private todolistservice:ToDoListService,private invoiceservice:InvoiceService,
    public datepipe: DatePipe,private projectservice:ProjectService,private clinetservice:ClientService
    ,private loginservice:LoginService ) { 
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

     this.projectservice.getproject().subscribe(res=>{
        console.log("projects")
        if(res['code']==200){
          this.allprojects=res['data'];
        }
     })
     this.clinetservice.getallclient().subscribe(res=>{
      if(res['code']==200){
        this.allclient=res['data'];
      }

     })
    //this.showprofitshart();
    



  }
   isOpen=false;
   alltasks:any;
  ngOnInit() {
    // console.log("siteConfig",siteConfig[0].isOpened );
     this.todolistservice.getalltask().subscribe(res=>{
         this.alltasks=res['data'];
         console.log("alltasks",this.alltasks);

     })
     let userdata= this.loginservice.getUserData();
     this.username=userdata[0].first_name;
     var myDate = new Date();
   var hrs = myDate.getHours();

  

   if (hrs < 12)
       this.greet = 'Good Morning';
   else if (hrs >= 12 && hrs <= 17)
       this.greet = 'Good Afternoon';
   else if (hrs >= 17 && hrs <= 24)
       this.greet = 'Good Evening';
     

    
    
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
