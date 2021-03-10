import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-forget-passord',
  templateUrl: './forget-passord.component.html',
  styleUrls: ['./forget-passord.component.css']
})
export class ForgetPassordComponent implements OnInit {

  constructor(private customerService:CustomerService) { }
  token:string;
  customerId:string;
  msg:string;
  errorMsg:string;
  ngOnInit() {
    this.token=localStorage.getItem("token");
  }

  forgetpassword(){
    this.customerService.forgetpassword(this.customerId).subscribe(data=>{
      console.log(data);
      this.msg=data;
      this.errorMsg=undefined;
    },error=>{
      console.log("error");
      console.log(JSON.parse(error.error).message);
      this.errorMsg=JSON.parse(error.error).message;
      this.msg=undefined;
  });

}
}