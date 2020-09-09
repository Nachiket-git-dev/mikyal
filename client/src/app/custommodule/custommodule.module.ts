import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {SideNavModule} from '../../../@mikyl/layout/sidenav/side-nav.module'
import {CustommoduleComponent} from './custommodule.component'
import { RouterModule } from '@angular/router';
import {CreateProjectModule} from '../apps/project/create-project/create-project.module'
import {ClientModule} from '../apps/client/client.module'
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [CustommoduleComponent],
  imports: [
    CommonModule,
    RouterModule,
    CreateProjectModule,
    ClientModule,
    MatDialogModule
    // SideNavModule
  ]
})
export class CustommoduleModule { }
