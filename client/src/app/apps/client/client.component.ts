import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/Dialog';
import {CreateClientComponent} from './create-client/create-client.component';
import { FormBuilder, FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import {ClientService} from './client.service'
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:any
  searchCtrl = new FormControl();
  tempclients:any
  constructor(private dialog:MatDialog,private clientservice:ClientService) { }

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
    data:''
  })
}

}
