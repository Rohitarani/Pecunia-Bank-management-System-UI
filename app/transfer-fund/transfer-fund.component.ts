import { Component, OnInit } from '@angular/core';
import { Transfer } from '../transfer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent implements OnInit {

  trans:Transfer = new Transfer();
  msg:string;
  errorMsg:string;

  constructor(private customerService:CustomerService) { }

  fromAccounts:any;
  customerId:string;
  token:string;

  ngOnInit() {
    console.log(this.errorMsg);
    this.token=localStorage.getItem("token");
    this.customerId=this.customerService.decrypt(this.token.split("-")[0]);
    this.customerService.viewAccounts(this.customerId).subscribe(data=>{
      this.fromAccounts=data;
    })
  }

  transfer(){
    console.log(this.trans);
    this.customerService.transferAccount(this.trans).subscribe(data=>{
             this.msg=data;
             this.errorMsg=undefined;
            }, 
            error=>{
              this.errorMsg=JSON.parse(error.error).message;
              this.msg=undefined;
              console.log(error);
            }
            );
}



}