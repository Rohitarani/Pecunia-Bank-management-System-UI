import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountForm } from './account-form';
import { Transfer } from './transfer';
import { CustomerForm } from './customer-form';
import { Accreportform } from './accreportform';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  isUser:string;
  isAdmin:string;
  isNone:string;
  constructor(private http:HttpClient) { }

  public doLogin(userId:string,pwd:string):Observable<any>{
    let postData=new FormData();
    postData.append("userid",userId);
    postData.append("password",pwd);
    return this.http.post("http://localhost:8092/springproject/login",postData,{responseType:'text'});
  }

  public decrypt(token:string){
    let str="";
    for(let i=0;i<token.length;++i){
      str=str+String.fromCharCode(token.charCodeAt(i)-3);
    }
    return str;
  }

  public doLogOut(){
     let utoken=localStorage.getItem("token");
    if(utoken==null) utoken="";
    const httpHeaders=new HttpHeaders();
    httpHeaders.append("userId",utoken);

    return this.http.get("http://localhost:8092/springproject/logout",{headers:httpHeaders,responseType:'text'});
  }

  public viewAccounts(customerId:string){
    return this.http.get("http://localhost:8092/springproject/viewaccountsbycustid/"+customerId);
  }

  public viewCustomer(customerId:string){
    return this.http.get("http://localhost:8092/springproject/viewcustomer/"+customerId);
  }

  public addAccount(accountform:AccountForm):Observable<any>{
    return this.http.post("http://localhost:8092/springproject/addaccount",accountform);
  }

  public transferAccount(transfer:Transfer):Observable<any>{
    return this.http.post("http://localhost:8092/springproject/doTxn", transfer,{responseType:'text'});
  }

  public addCustomer(customerform:CustomerForm){
    console.log(customerform);
    return this.http.post("http://localhost:8092/springproject/addcustomer",customerform);
  }

  public viewTransactions(accountId:string):Observable<any>{
    return this.http.get("http://localhost:8092/springproject/getTxn/"+accountId);
  }

   public download(accountId:string):Observable<any>{
    return this.http.get("http://localhost:8092/springproject/viewpdf/"+accountId,{responseType:'blob' as'json'});
  }

  public forgetpassword(customerId:string):Observable<any>{
    return this.http.get("http://localhost:8092/springproject/forgetpassword/"+customerId,{responseType:'text'});
  }

  public changePassword(customerid:string,oldPassword:string,newPassword:string):Observable<any>{
    let postData=new FormData();
    postData.append("customerId",customerid);
    postData.append("oldpassword",oldPassword);
    postData.append("newpassword",newPassword);

    return this.http.post("http://localhost:8092/springproject/changepassword",postData,{responseType:'text'});
  }

  public viewTransactionFromDate(accountreport:Accreportform):Observable<any>{
    return this.http.post("http://localhost:8092/springproject/getTxn",accountreport);
  }

 
}