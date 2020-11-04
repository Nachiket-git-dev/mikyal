import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup,FormArray } from '@angular/forms';
import {InvoiceService} from '../invoice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ClientService} from '../../client/client.service';
import {ProjectService} from '../../../services/project/project.service'

import { Router,ActivatedRoute, Params } from '@angular/router';
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
    project_id:null,
    invoice_name: ['', Validators.required],
    billing_address:null,//['',Validators.required],
    house_no:null,
    zip:['',Validators.required],
    street:['',Validators.required],
    city:['',Validators.required],
    start_date:new Date(),
    due_date:null,// ['', Validators.required],
     discount:[0,Validators.pattern("\\d+(?:\\.\\d+)?")],
     tax:[0,Validators.pattern("\\d+(?:\\.\\d+)?")],
    client_select:[],
    project_select:[],
    client_id:null,
    tax_amount:null,
    discount_amount:0,
    subtotal:null,
    total:[0,Validators.pattern("\\d+(?:\\.\\d+)?")],
    client_note:''

  })
    clientlist:any[];
    projectlist:any[];
    filteredOptions;
    filterprojectoptions;
    total
    discount_amt=0;
    subtotal=0;
    Options = {
      
      format: 'DD/MM/YYYY'
  }
  get f() { 
     
    return this.form.controls; }
  constructor(private fb: FormBuilder,private invoiceservice:InvoiceService,
    private clientservice:ClientService,private snackbar:MatSnackBar,private router:Router,
    private route:ActivatedRoute,private projectservice:ProjectService) {
    this.rows = this.fb.array([]);
    this.form.addControl('rows', this.rows);
    //this.rows.push(this.createItemFormGroup());
    
   }
   dataker(){
    
   }

  ngOnInit() {
    
    
  
    this.clientservice.getallclient().subscribe(clients=>{
      this.clientlist=clients['data'];
    })
    this.projectservice.getproject().subscribe(res=>{
      if(res['code']==200){
       this.projectlist=res['data']
      }
    })
    
    this.form.get('client_select').valueChanges.subscribe(val => {
      
      this.filteredOptions=this._filter(val)
     
     })
     this.form.get('project_select').valueChanges.subscribe(val => {
      
      this.filterprojectoptions=this._filterproject(val)
     
     })

     this.form.get("rows").valueChanges.subscribe(val => {
      this.total=0;
      this.subtotal=0;
      this.discount_amt=0;
      console.log("val change",val);
      val.forEach((element,index) => {
        const control = <FormArray>this.form.controls['rows'];
        let total=Number(element.unit_cost)*Number(element.qty);
        let discount_amt=0
       if(element.discount!=''){ 
           discount_amt =(total/100)*Number(element.discount); 
          
          if(discount_amt>0){
            total-=discount_amt;
          }
      }
        console.log("total",total);
        this.subtotal+=total;
        control.at(index).get('price').setValue(total, {onlySelf: true, emitEvent: false});
        this.discount_amt+=discount_amt;           
        this.total+=total;
        this.form.patchValue({total:this.total,
          discount_amount:this.discount_amt
        });

      });
    })
    if(this.route.snapshot.queryParams['invoice_id'])
    {
       this.invoiceservice.getinvoicebyid(this.route.snapshot.queryParams['invoice_id']).subscribe(res=>{
       console.log("res",res)
       this.form.patchValue(res['data'][0]);
       this.clientservice.getclientbyid(res['data'][0].client_id).subscribe(client=>{
         console.log("client",client);
         if(client['code']==200 && client['message']=='Success'){
            this.form.patchValue({client_select:client['data'][0].first_name+" "+client['data'][0].last_name})
         }
       })
       this.projectservice.getprojectbyid(res['data'][0].project_id).subscribe(res=>{
        this.form.patchValue({project_select:res['data'][0].project_name})

       })
       });
       this.invoiceservice.getinvoiceservice(this.route.snapshot.queryParams['invoice_id']).subscribe(service=>{
        console.log("service",service);
        for(let i=0; i<service['data'].length;i++){
          this.total+=service['data'][i].price;
          this.subtotal+=service['data'][i].subtotal;
          this.discount_amt=service['data'][i].discount_amt;
          this.rows.push(this.createItemFormGroupupdate(service['data'][i].item_id,service['data'][i].service_name,service['data'][i].description,service['data'][i].price,service['data'][i].unit_price,service['data'][i].qty,service['data'][i].discount))
        }
          console.log("this.rows update",this.rows);

       })
    }
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
       description: '',
      unit_cost:['', Validators.required],
      discount:[0,[Validators.required,Validators.pattern("\\d+(?:\\.\\d+)?")]],
      qty:['', Validators.required],
      price: ['', [Validators.required]]
    });
  }
  createItemFormGroupupdate(item_id,service_name,description,price,unit_cost,qty,discount): FormGroup {
    return this.fb.group({
      item_id:[item_id || null],
      service_name: [service_name, Validators.required],
      description:'',
      discount:[discount || 0,[Validators.required]],
      unit_cost:[unit_cost, Validators.required],
      qty:[qty,Validators.required],
      price: [price, [Validators.required]]
    });
  }
  private _filter(value: string): string[] {
    if(value){
     
    console.log("fikler",this.clientlist);
    return this.clientlist.filter(option =>option.first_name.toLowerCase().includes(value));
    }
  }
  private _filterproject(value: string): string[]{
    if(value){
     
     return this.projectlist.filter(option =>option.project_name.toLowerCase().includes(value));
     }

  }
  handler(event:any): void {
    console.log("event",event);
   let clientrow =  this.clientlist.find(x => x.client_id == event.option.value);
   console.log("clientrow",clientrow);
   let client_name= clientrow.first_name+" "+clientrow.last_name;
   
   this.form.patchValue({
     client_id:event.option.value,
     client_select:client_name,
     street:clientrow.street,
     zip:clientrow.zip,
     city:clientrow.city
   })
}
projecthandler(event:any): void {
  console.log("event",event);
 let projectrow =  this.projectlist.find(x => x.project_id == event.option.value);
 console.log("clientrow",projectrow);
 let project_name= projectrow.project_name;
 
 this.form.patchValue({
  project_id:projectrow.project_id,
  project_select:project_name
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
          client_select:null,
          project_select:null
        })
      }
    },
    err => this._subscribeToClosingActions(),
    () => this._subscribeToClosingActions());
}


 saveinvoice(){
  this.form.addControl('rows', this.rows);
   console.log("this.form",this.form)
   console.log("this.rows",this.rows);
  
   if(!this.form.valid){
     console.log("invoice not valid");
     this.snackbar.open('Invoice Not Valid', 'OK', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
     return
   }
   if(this.rows.length<=0){
    this.snackbar.open('Please! Add The items', 'ok', {
      duration: 3000
    });
    return;
  }
   if(this.route.snapshot.queryParams['invoice_id']){
    console.log("update_inv",this.form.value);
    
     this.invoiceservice.updateinvoice(this.form.value).subscribe(res=>{
        console.log("res",res);
        if(res['code']==200){
          this.snackbar.open('Invoice update Successfully', 'OK', {
            duration: 3000,
            panelClass: ['blue-snackbar']
          });
          location.reload();
        }
     },err=>{
       console.log("err",err);
     })
   }else{
   
   let billing_address=this.form.value.house_no+" "+this.form.value.street+" "+this.form.value.city+" "+this.form.value.zip;
    this.form.patchValue({billing_address:billing_address});
    console.log("this.form",this.form);
    this.invoiceservice.createinvoice(this.form.value).subscribe(res=>{
      console.log("res",res);
      if(res['code']==200){
        this.snackbar.open('Invoice Created Successfully', 'OK', {
          duration: 3000,
          panelClass: ['blue-snackbar']
        });
        location.reload();
      }
    })

 }
}


}
