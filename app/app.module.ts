import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchPipe } from './search.pipe';
import { ForgetPassordComponent } from './forget-passord/forget-passord.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'viewaccount',component:ViewAccountComponent},
  {path:'transferfund',component:TransferFundComponent},
  {path:'addaccount',component:AddAccountComponent},
  {path:'addcustomer',component:AddCustomerComponent},
  {path:'viewtransaction/:accId',component:ViewTransactionComponent},
  {path:'myprofile',component:MyProfileComponent},
  {path:'forgetpassword',component:ForgetPassordComponent},
  {path:'changepassword',component:ChangepasswordComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    ViewAccountComponent,
    TransferFundComponent,
    HomeComponent,
    AddCustomerComponent,
    AddAccountComponent,
    ViewTransactionComponent,
    MyProfileComponent,
    SearchPipe,
    ForgetPassordComponent,
    ChangepasswordComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
