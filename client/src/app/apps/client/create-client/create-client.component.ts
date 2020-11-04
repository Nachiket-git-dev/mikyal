import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import {ClientService} from '../client.service'
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  clientform: FormGroup;
  isupdate:boolean
  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
  private fb: FormBuilder,private clientservice:ClientService,private snackbar:MatSnackBar,
  public dialogRef: MatDialogRef<CreateClientComponent>) { }
  
  ngOnInit() {
    this.isupdate=false;
   if(this.defaults.client_id){
    this.isupdate=true;
   }
    this.clientform = this.fb.group({
      id: '',
      first_name: [this.defaults.first_name|| '',[Validators.required]],
      last_name: [this.defaults.last_name || '',[Validators.required]],
      street: this.defaults.street || '',
      company:null,
      city: this.defaults.city || '',
      email:[this.defaults.email || '',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      zip: [this.defaults.zip || ''],
      phone: [this.defaults.phone || '',[Validators.pattern("[0-9 ]{10}")]],
      notes: [this.defaults.note || '']
    });

    this.clientservice.getallclient().subscribe(res=>{


    })
  }
  get f() { return this.clientform.controls; }

  save(){

    const customer = this.clientform.value;
    this.clientservice.createclient(customer).subscribe(res=>{

      console.log("res",res);
      if(res['message']=="Success" && res['code']==200){
        this.snackbar.open('Cilent Created Successfully', 'Ok', {
          duration: 3000,
          panelClass: ['blue-snackbar']
        });
        this.dialogRef.close(true);
        location.reload();
      }
    },err=>{

      console.log("err",err);
      this.dialogRef.close(true);
      location.reload();
    })
  }
  updateCustomer() {
    const customer = this.clientform.value;
    customer.id=this.defaults.client_id
    this.clientservice.updateclient(this.defaults.client_id,customer).subscribe(res=>{

      console.log("res",res);
      if(res['message']=="Success" && res['code']==200){
      this.snackbar.open('Cilent Updated Successfully', 'Ok', {
        duration: 3000
      });
      this.dialogRef.close(true);
      location.reload();
    }
    },err =>{
      console.log("err",err);
      this.dialogRef.close(true);
    })
   console.log("this.defaults",this.defaults);
    this.dialogRef.close(customer);
    location.reload();
  }
  close(){
    this.dialogRef.close(true);
  }
}
