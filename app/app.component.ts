import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PecuniaAngular';
  userid:string;
  password:string;

  userName:string=undefined;
  role:string;
  customerID:string;
  token:string;
  msg:string;
  flag:boolean=false;

  ngOnInit() {

    this.token=localStorage.getItem("token");
    if(this.token!=null){
      this.role=this.customerService.decrypt(this.token.split("-")[2]);
      this.userName=this.customerService.decrypt(this.token.split("-")[1]);
    }
    
  }




  constructor(private customerService:CustomerService){}

  login(){
    this.customerService.doLogin(this.userid,this.password).subscribe(data=>{
      localStorage.setItem("token",data);
      this.token=data;
      let arr=data.split("-");
      this.userName=this.customerService.decrypt(arr[1]);
      this.role=this.customerService.decrypt(arr[2]);

    },error=>{
      console.log(error);
      this.msg="You are not authenticated and authorized, Please Login";
    });
  }

  logout(){
    this.customerService.doLogOut().subscribe(data=>{console.log(data);
    localStorage.removeItem("token");
    this.token=null;
    this.msg=undefined;
    alert("You are logged out");
    })
  }

  toggle(){
    this.flag=!this.flag;
  }
}
