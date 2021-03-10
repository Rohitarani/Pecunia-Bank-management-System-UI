import { Customer } from "./customer";

export class Account {
    accountId:string;
    accountName:string;
    accountStatus:string;
    accountBalance:number;
    lastUpdated:string;
    customer:Customer=new Customer();
}
