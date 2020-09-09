import { Component, OnInit } from '@angular/core';
import {siteConfig} from 'src/app/sitesettings';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
   isOpen=false;
  ngOnInit() {
    // console.log("siteConfig",siteConfig[0].isOpened );
    
    
  }

}
