import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/Dialog';
import {CreateClientComponent} from './create-client/create-client.component';
import { FormBuilder, FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import {ClientService} from './client.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:any
  searchCtrl = new FormControl();
  tempclients:any
  constructor(private dialog:MatDialog,private clientservice:ClientService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.searchCtrl.valueChanges.subscribe(res=>{
      if(!res){
       this.clients=this.tempclients;
      }
     this.clients=this.clients.filter(item => item.first_name.search(new RegExp(res, 'i')) > -1 
      || item.last_name.search(new RegExp(res,'i')) > -1 
     )
     
   })
    this.clientservice.getallclient().subscribe(client=>{
       if(client['code']==200){
        this.clients=client['data'];
        this.tempclients=client['data'];
        console.log("this.clients",this.clients);
       }
     

    })
  }
  createclient(){
    console.log("inside client");
  this.dialog.open(CreateClientComponent,{
    data:'',
    // panelClass: 'custom-dialog-container'
  })
}
editclient(client){
console.log("client",client);
this.dialog.open(CreateClientComponent,{
  data:client,
  // panelClass: 'custom-dialog-container'
})
}
deleteCustomer(customer: any) {
  /**
   * Here we are updating our local array.
   * You would probably make an HTTP request here.
   */
  console.log("customer",customer.client_id);
    this.clientservice.deleteclient(customer.client_id).subscribe(res=>{

      if(res['message']=="Success" ){
        this.snackbar.open('Client Removes Successfully', 'OK', {
          duration: 3000
        });
        this.clients.splice(this.clients.findIndex((existingCustomer) => existingCustomer.client_id === customer.client_id), 1);
    
      }
    },err =>{
      this.snackbar.open('this Client Is Associated with Project! Cannot removed', 'OK', {
        duration: 3000
      })

    })
  
}

}
