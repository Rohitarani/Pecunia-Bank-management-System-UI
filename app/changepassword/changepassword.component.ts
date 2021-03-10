import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private customerService:CustomerService) { }
  token:string;
  customerId:string
  oldPassword:string;
  newPassword:string;
  msg:string;
  errorMsg:string;
  ngOnInit() {
    this.token=localStorage.getItem("token");
    this.customerId=this.customerService.decrypt(this.token.split("-")[0]);
  }
  changepassword(){
    this.customerService.changePassword(this.customerId,this.oldPassword,this.newPassword).subscribe(data=>{
      this.msg=data;
      this.errorMsg=undefined;
    },error=>{
        this.msg=undefined;
        this.errorMsg=JSON.parse(error.error).message;
    });
  }

}
