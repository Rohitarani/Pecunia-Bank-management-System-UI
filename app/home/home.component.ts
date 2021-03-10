import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(customerService:CustomerService) { }
  token:string;
  ngOnInit() {
    this.token=localStorage.getItem("token");
  }

}
