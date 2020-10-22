import { Component, OnInit,Output,Input,EventEmitter,SimpleChanges } from '@angular/core';
import {InvoiceService} from './invoice.service';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import {ClientService} from '../client/client.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
declare var daterangepicker: any;
import paginate from 'jw-paginate';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  pageOfItems: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  pager: any = {};
  searchCtrl = new FormControl();
  tempinvoice:any  
   invoices:any
    invoiceslistLabels = [
    {
      text: 'Approved',
      backgroundColor: '#572132',
      color: '#FF6B69'
    },
   
    {
      text: 'Paid',
      backgroundColor: '#21574A',
      color: '#41C9A9'
    },
    {
      text: 'Unpaid',
      backgroundColor: '#53381F',
      color: '#EF9611'
    },
  //   {
  //     text: '',
  //     backgroundColor: Color(theme.colors.purple['500']).fade(0.9),
  //     color: theme.colors.purple['500']
  //   },
  ];

  constructor(private invoiceservice:InvoiceService,private router:Router,
    private clientservice:ClientService,private snackbar:MatSnackBar) { }

  ngOnInit() {
 
  //   document.querySelector(".dropbtn").onclick = function () {
  //     document.getElementById("myDropdown").classList.toggle("dropbtn_show");
  // }

  document.querySelectorAll(".export_btn").forEach(e => {
      
    e.addEventListener("click", () => {
        document.querySelector(".invoice-dropdown").classList.toggle("tooltip__active")
    })
})
  // e.currentTarget.querySelector(".tooltip ").classList.toggle("tooltip__active")
    this.invoiceservice.getallinvoices().subscribe(res =>{
      if(res['code']==200){
       this.invoices=res['data'];
       this.tempinvoice=res['data'];
       console.log("invoices",res);
       this.setPage(this.initialPage);
      }
    })
    this.searchCtrl.valueChanges.subscribe(res=>{
      console.log("typing",res);
      if(!res){
       this.pageOfItems=this.tempinvoice;
       
      }
      console.log("this.pageOfItems",this.pageOfItems);
     this.pageOfItems=this.pageOfItems.filter(item => item.invoice_name.search(new RegExp(res, 'i')) > -1 
      || item.billing_address.search(new RegExp(res,'i')) > -1 
     )
     
   })



  }
  onLabelChange(change: MatSelectChange, row: any) {
    const index = this.invoices.findIndex(c => c === row);

    console.log(row);
    console.log("change",change);
    const status_index=this.invoiceslistLabels.findIndex(c=> c.text ===change.value.text)
    console.log(row.invoice_id);
    let data={status:status_index,
    invoice_id:row.invoice_id}
    this.invoiceservice.changestatus(data).subscribe(res=>{
      console.log("res",res);
    },err=>{
      console.log("err",err);
    })
    this.invoices[index].status = status_index;
    

  }
  ondropdown(e){
    document.getElementById("myDropdown").classList.toggle("dropbtn_show");
  }
  filterdrop(filterdrp){
    console.log("inside",filterdrp);
    if(filterdrp=='all'){
         this.pageOfItems=this.tempinvoice;
       }
       else{
        this.pageOfItems=this.invoices.filter(c=>c.status==filterdrp);
       }

    
  // if(filterdrp=='all'){
  //   this.pageOfItems=this.tempinvoice;
  // }
  // if(filterdrp=='approved'){
  //   this.pageOfItems=this.pageOfItems.filter(c=>c.status==0);
  // }
}
  invoiceedit(invoice){
    console.log("edit run",invoice);
    this.router.navigate(['/invoice/create-invoice'],{queryParams:{invoice_id:invoice.invoice_id} })
      }
  deleteinvoice(invoice){
    this.invoiceservice.deleteinvoice(invoice.invoice_id).subscribe(res=>{
      console.log("res",res);
     if(res['code']==200){ 
      this.snackbar.open('Deleted Successfully', 'Ok', {
       duration: 3000,
       panelClass: ['blue-snackbar']
     });
     location.reload();
   }
    },err=>{
      console.log("err",err);
    })
 }
 openinvoice(invoice){
   console.log("invoice",invoice);
   this.router.navigate(['/invoice/invoice-preview'],{queryParams:{invoice_id:invoice.invoice_id} })

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
  this.pager = paginate(this.invoices.length, page, this.pageSize, this.maxPages);

  // get new page of items from items array
  var pageOfItems = this.invoices.slice(this.pager.startIndex, this.pager.endIndex + 1);
  console.log("pageOfItems",pageOfItems);
  // call change page function in parent component
  this.onChangePage(pageOfItems);
  this.changePage.emit(pageOfItems);
}
 
  

}
