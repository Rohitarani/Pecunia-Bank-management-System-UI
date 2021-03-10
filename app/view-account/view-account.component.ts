import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  constructor(private customerService:CustomerService) {

   }

  userName:string=undefined;
  role:string;
  token:string;
  customerId:string;
  accounts:any;
  msg:string;
  searchflag:string;

  ngOnInit() {
    this.token=localStorage.getItem("token");
    this.role=this.customerService.decrypt(this.token.split("-")[2]);
    this.userName=this.customerService.decrypt(this.token.split("-")[1]);
    this.customerId=this.customerService.decrypt(this.token.split("-")[0]);  

    this.customerService.viewAccounts(this.customerId).subscribe(data=>{
      console.log(data);
      this.accounts=data;
      this.msg=undefined;
    },error=>{
      console.log(error);
      this.msg=error.error.message;
      this.accounts=null;
    })
  }

}
