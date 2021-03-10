import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Accreportform } from '../accreportform';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {

  transactions:any;
  accreport:Accreportform=new Accreportform();
  token:string;
  errorMsg:string=undefined;

  constructor(private customerService:CustomerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
      
      this.route.paramMap.subscribe(params=>{let accid:string=params.get("accId");
      this.accreport.accountId=accid;
      this.customerService.viewTransactions(accid).subscribe(data=>{this.transactions=data;console.log(this.transactions)},error=>{
        console.log("Error "+error);
      });
    })
  }
  viewTransactionDate(){
   console.log(this.accreport.accountId);
   console.log(this.accreport.fromDate);
   console.log(this.accreport.toDate);

   this.customerService.viewTransactionFromDate(this.accreport).subscribe(data=>{
      this.transactions=data;
      this.errorMsg=undefined;
   },error=>{
      this.errorMsg=error.error.message;
      this.transactions=undefined;
   });
  }

  download(){
    this.route.paramMap.subscribe(params=>{let accid:string=params.get("accId");
    this.customerService.download(accid).subscribe(data=>{ let blob = new Blob([data], {type: 'application/pdf'});

    var downloadURL = window.URL.createObjectURL(data);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.download = "report.pdf";
    link.click();}
      )
  })
  }
}
