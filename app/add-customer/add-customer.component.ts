import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerForm } from '../customer-form';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  userName:string=undefined;
  role:string;
  token:string;
  customerId:string;
  customerform:CustomerForm=new CustomerForm();
  msg:string;
  errorMsg:string;
  flag:string;

  roleType:string[]=['customer','admin'];

  ngOnInit() {

    this.token=localStorage.getItem("token");
    this.role=this.customerService.decrypt(this.token.split("-")[2]);
    this.userName=this.customerService.decrypt(this.token.split("-")[1]);
    this.customerId=this.customerService.decrypt(this.token.split("-")[0]);

  }

  addCustomer(){
    

    this.customerService.addCustomer(this.customerform).subscribe(data=>{
      this.msg="Successfully Added";
      this.errorMsg=undefined;
      this.customerform=new CustomerForm();
    },error=>{
      this.errorMsg=error.error.message;
      this.msg=undefined;
      console.log(this.errorMsg);
    });
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

}
