import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToDoListComponent} from './to-do-list.component'
import {ToDoListRoutingModule} from './to-do-list-routing.module'
import {MatMenuModule} from '@angular/material/menu'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {CreateTaskModule} from './create-task/create-task.module'

@NgModule({
  declarations: [ToDoListComponent],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    MatMenuModule,
    ReactiveFormsModule,    
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    CreateTaskModule
  ]
})
export class ToDoListModule { }
