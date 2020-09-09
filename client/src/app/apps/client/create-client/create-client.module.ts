import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateClientComponent} from './create-client.component'
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [CreateClientComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatInputModule
    
  ],
  exports:[CreateClientComponent],
  entryComponents: [CreateClientComponent],
})
export class CreateClientModule { }
