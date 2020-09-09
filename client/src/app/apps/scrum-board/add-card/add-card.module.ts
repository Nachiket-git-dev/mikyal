import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddCardComponent} from  './add-card.component'
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [AddCardComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents:[AddCardComponent],
  exports:[AddCardComponent]
})
export class AddCardModule { }
