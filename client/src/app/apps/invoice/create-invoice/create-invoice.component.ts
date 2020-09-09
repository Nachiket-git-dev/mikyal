import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup,FormArray } from '@angular/forms';
import {InvoiceService} from '../invoice.service';
import {ClientService} from '../../client/client.service'
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  VERSION,
} from '@angular/material';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger,{static:false}) trigger: MatAutocompleteTrigger;
  version = VERSION;
  subscription: Subscription;
  rows: FormArray;
  form = this.fb.group({
    invoice_id:null,
    invoice_name: ['', Validators.required],
    billing_address:['',Validators.required],
   
    due_date: ['', Validators.required],
     discount:[0,Validators.pattern("\\d+(?:\\.\\d+)?")],
     tax:[0,Validators.pattern("\\d+(?:\\.\\d+)?")],
    client_select:[],
    client_id:null,
    tax_amount:null,
    discount_amount:null,
    total:null

  })
    clientlist:any[];
    filteredOptions;
  constructor(private fb: FormBuilder,private invoiceservice:InvoiceService,private clientservice:ClientService) {
    
   }

  ngOnInit() {
    this.rows = this.fb.array([]);
    this.form.addControl('rows', this.rows);
    this.rows.push(this.createItemFormGroup());
    this.clientservice.getallclient().subscribe(clients=>{
      this.clientlist=clients['data'];
    })
    this.form.get('client_select').valueChanges.subscribe(val => {
      console.log("val",val);
      this.filteredOptions=this._filter(val)
     
     })
  }
  onAddRow() {
    this.rows.push(this.createItemFormGroup());
    
  }
  

  onRemoveRow(rowIndex:number){
   
    if(this.form.value.rows[rowIndex].item_id){
      this.invoiceservice.deleteservicerow(this.form.value.rows[rowIndex].item_id).subscribe(res=>{
        console.log("res",res);
      },err=>{
        console.log("err",err);
      })
    }

    this.rows.removeAt(rowIndex);
  }
  
  createItemFormGroup(): FormGroup {
    return this.fb.group({
      item_id:null,
      service_name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required,Validators.pattern("\\d+(?:\\.\\d+)?")]]
    });
  }
  createItemFormGroupupdate(item_id,service_name,description,price): FormGroup {
    return this.fb.group({
      item_id:[item_id || null],
      service_name: [service_name, Validators.required],
      description: [description, Validators.required],
      price: [price, [Validators.required,Validators.pattern("\\d+(?:\\.\\d+)?")]]
    });
  }
  private _filter(value: string): string[] {
    if(value){
    const filterValue = value.toLowerCase();
    console.log("fikler");
    return this.clientlist.filter(option =>option.first_name.toLowerCase().includes(filterValue));
    }
  }
  handler(event:any): void {
    console.log("event",event);
   let clientrow =  this.clientlist.find(x => x.client_id == event.option.value);
   console.log("clientrow",clientrow);
   let client_name= clientrow.first_name+" "+clientrow.last_name;
   this.form.patchValue({
     client_id:event.option.value,
     client_select:client_name
   })

}
ngAfterViewInit() {
  this._subscribeToClosingActions();
}
private _subscribeToClosingActions(): void {
  if (this.subscription && !this.subscription.closed) {
    this.subscription.unsubscribe();
  }

  this.subscription = this.trigger.panelClosingActions
    .subscribe(e => {
      if (!e || !e.source) {
        this.form.patchValue({
          client_select:null
        })
      }
    },
    err => this._subscribeToClosingActions(),
    () => this._subscribeToClosingActions());
}

}
