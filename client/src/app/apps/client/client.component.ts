import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';;
import {MatDialog} from '@angular/material/Dialog';
import {CreateClientComponent} from './create-client/create-client.component';
import { FormBuilder, FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import {ClientService} from './client.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import paginate from 'jw-paginate';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:any
  searchCtrl = new FormControl();
  tempclients:any
  pageOfItems: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  pager: any = {};
  constructor(private dialog:MatDialog,private clientservice:ClientService,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.searchCtrl.valueChanges.subscribe(res=>{
      if(!res){
       this.pageOfItems=this.tempclients;
       
      }
     this.pageOfItems=this.pageOfItems.filter(item => item.first_name.search(new RegExp(res, 'i')) > -1 
      || item.last_name.search(new RegExp(res,'i')) > -1 
     )
     
   })
    this.clientservice.getallclient().subscribe(client=>{
       if(client['code']==200){
        this.clients=client['data'];
        this.tempclients=client['data'];
        console.log("this.clients",this.clients);
        this.setPage(this.initialPage);
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
        location.reload();
      }
    },err =>{
      this.snackbar.open('this Client Is Associated with Project! Cannot removed', 'OK', {
        duration: 3000
      })

    })
  
}
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}
ngOnChanges(changes: SimpleChanges) {
  // reset page if items array has changed
  if (changes.clients.currentValue !== changes.clients.previousValue) {
    this.setPage(this.initialPage);
  }
}
 setPage(page: number) {
  // get new pager object for specified page
  console.log("page",page);
  this.pager = paginate(this.clients.length, page, this.pageSize, this.maxPages);

  // get new page of items from items array
  var pageOfItems = this.clients.slice(this.pager.startIndex, this.pager.endIndex + 1);
  console.log("pageOfItems",pageOfItems);
  // call change page function in parent component
  this.onChangePage(pageOfItems);
  this.changePage.emit(pageOfItems);
}

}
