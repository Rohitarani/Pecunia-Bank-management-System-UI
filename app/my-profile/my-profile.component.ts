import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  customer:any;
  customerId:string;
  token:string;

  ngOnInit() {
    console.log(this.customerId)
    this.token=localStorage.getItem("token");
    this.customerId=this.customerService.decrypt(this.token.split("-")[0]);
    this.customerService.viewCustomer(this.customerId).subscribe(data=>{
      this.customer=data;
      console.log(this.customer);
    },error=>{
      console.log(error);
    });

  }

}
