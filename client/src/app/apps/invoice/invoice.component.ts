import { Component, OnInit } from '@angular/core';
import {InvoiceService} from './invoice.service';
import { MatSelectChange } from '@angular/material/select';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

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

  constructor(private invoiceservice:InvoiceService) { }

  ngOnInit() {
    this.invoiceservice.getallinvoices().subscribe(res =>{
      if(res['code']==200){
       this.invoices=res['data'];
      }
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

}
