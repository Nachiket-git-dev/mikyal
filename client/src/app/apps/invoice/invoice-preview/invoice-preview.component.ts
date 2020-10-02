import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../invoice.service';
import {LoginService} from '../../login/login.service'
import { Router,ActivatedRoute, Params } from '@angular/router';
import {ClientService} from '../../client/client.service';
import {MyaccountService} from '../../MyAccount/myaccount.service'
@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.css']
})
export class InvoicePreviewComponent implements OnInit {

  serviceline:any[];
  address;
  phone;
  clientname
  usercompany;
  useraddress;
  userzip;
  usercity
  invname;
  invemail;
  invcompany
  invaddress;
  invphone;
  userstreet;
  userphone;
  useremail;
  invoicedate;
  subtotal;
  tax;
  tax_amt
  discount_amt
  discount;
  total
  attachment
  constructor(private invoiceservice:InvoiceService,private route:ActivatedRoute,
    private clientservice:ClientService,private loginservice:LoginService,private myaccountservice:MyaccountService) { }

  ngOnInit() {
    this.invoiceservice.getinvoicebyid(this.route.snapshot.queryParams['invoice_id']).subscribe(res=>{
      console.log("res",res);
      this.address=res['data'][0].billing_address;
      this.invoicedate=res['data'][0].created_date;
      this.tax=res['data'][0].tax;
      this.discount=res['data'][0].discount
      this.tax_amt=res['data'][0].tax_amount
      this.discount_amt=res['data'][0].discount_amount
      this.total=res['data'][0].total
      this.clientservice.getclientbyid(res['data'][0].client_id).subscribe(client=>{
        console.log("client",client);
        this.clientname=client['data'][0].first_name+" "+ client['data'][0].last_name;
          this.userstreet=client['data'][0].street
          this.userzip=client['data'][0].zip;
          this.usercity=client['data'][0].city;
        this.phone=client['data'][0].phone;
        this.useremail=client['data'][0].email
        
      })
    },err=>{
      console.log("err",err);
    });
    this.invoiceservice.getinvoiceservice(this.route.snapshot.queryParams['invoice_id']).subscribe(res=>{
      console.log("res",res);
       this.subtotal=0;
      this.serviceline=res['data'];
      for (let lines of this.serviceline){
        this.subtotal += Number(lines.price);
      }
     
    },err=>{
      console.log("err",err);
    })
    let userdata=this.loginservice.getUserData();
    let userid = userdata[0]['user_id'];
    this.invemail=userdata[0]['email'];
   console.log("this.userid",userid);
   this.myaccountservice.getuserdetails(userid).subscribe(res=>{
     console.log("v==>",res);
    this.invcompany=res['data'][0].name;
    this.invaddress=res['data'][0].address;
    this.invphone=res['data'][0].phone;


   })

  }
 

}
