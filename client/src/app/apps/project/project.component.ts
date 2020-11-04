import { Component, OnInit,Output,Input,EventEmitter,SimpleChanges } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import {InvoiceService} from '../invoice/invoice.service'

import { FormControl,Validators,FormGroup,FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import paginate from 'jw-paginate';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public isTooltipDropDown: boolean = false;
  public isEyeDropDown: boolean = false;
  public isExportDropDown: boolean = false;
  public dropDownFlag: DropDownFlags[] = [];
  public projects: any = [];
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 9;
  @Input() maxPages = 100;
  pageOfItems: Array<any>;
  pager: any = {};
  searchCtrl = new FormControl();
  constructor(private _projectService: ProjectService,private invoiceservice:InvoiceService) { }
  ngOnInit() {
    this.getAllProjects();
    this.searchCtrl.valueChanges.subscribe(res=>{
      if(!res){
       this.pageOfItems=this.projects;
      }
     this.pageOfItems=this.pageOfItems.filter(item => item.project_name.search(new RegExp(res, 'i')) > -1 )
     
   })
    
  }
  searchStr$ = this.searchCtrl.valueChanges.pipe(
 
    debounceTime(10)
  );

  getAllProjects() {
    this._projectService.getproject().subscribe((projects:any)=>{
      console.log(projects);
      this.projects = projects.data;
      for (let index = 0; index < this.projects.length; index++) {
        this.dropDownFlag.push(new DropDownFlags());
      }
      console.log(this.projects);
      console.log(this.dropDownFlag);
      this.setPage(this.initialPage);
    });
  }

  openToolTipDropDown(index: number) {
    this.dropDownFlag[index].isTooltipDropDown = !this.dropDownFlag[index].isTooltipDropDown;
  }

  openEyeDropDown(index: number) {
    this.dropDownFlag[index].isEyeDropDown = !this.dropDownFlag[index].isEyeDropDown;
  }

  openExportDropDown(index: number) {
    this.dropDownFlag[index].isExportDropDown = !this.dropDownFlag[index].isExportDropDown;
  }

  addToPortfolio(project_id: any) {
    this._projectService.addtoportfolio(project_id)
      .subscribe((response) => {
        console.log(response);
        this.getAllProjects();
      });
  }

  removeToPortFolio(project_id: any) {
    this._projectService.removetoportfolio(project_id)
      .subscribe((response) => {
        console.log(response);
        this.getAllProjects();
      });
  }

  changeProjectStatus(project_id: any, status: string) {
    this._projectService.updatestatus(project_id, status)
      .subscribe((response) => {
        console.log(response);
        this.getAllProjects();
      });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.clients.currentValue !== changes.clients.previousValue) {
      this.setPage(this.initialPage);
    }
  }
   setPage(page: number) {
    // get new pager object for specified page
    console.log("page",page);
    this.pager = paginate(this.projects.length, page, this.pageSize, this.maxPages);
  
    // get new page of items from items array
    var pageOfItems = this.projects.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log("pageOfItems",pageOfItems);
    // call change page function in parent component
    this.onChangePage(pageOfItems);
    this.changePage.emit(pageOfItems);
  }
  


}

class DropDownFlags {
  isTooltipDropDown: boolean;
  isEyeDropDown: boolean;
  isExportDropDown: boolean;

  constructor() {
    this.isExportDropDown = false;
    this.isEyeDropDown = false;
    this.isTooltipDropDown = false;
  }
}
