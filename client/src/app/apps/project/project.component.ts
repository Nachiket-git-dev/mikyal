import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';

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

  constructor(private _projectService: ProjectService) { }
  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this._projectService.getproject().subscribe((projects:any)=>{
      console.log(projects);
      this.projects = projects.data;
      for (let index = 0; index < this.projects.length; index++) {
        this.dropDownFlag.push(new DropDownFlags());
      }
      console.log(this.projects);
      console.log(this.dropDownFlag);
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
