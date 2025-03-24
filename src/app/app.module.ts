import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing-module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './components/account/account.component';
import { RegularCustomerContactComponent } from './components/regular-customer-contact/regular-customer-contact.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataTablesModule } from 'angular-datatables';
import { StockComponent } from './components/stock/stock.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SalesComponent } from './components/sales/sales.component';
import { AccountManageComponent } from './components/account-manage/account-manage.component';
import { StockManageComponent } from './components/stock-manage/stock-manage.component';
import { CustomerManageComponent } from './components/customer-manage/customer-manage.component';
import { SalesManageComponent } from './components/sales-manage/sales-manage.component';
import { PaymentManageComponent } from './components/payment-manage/payment-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    RegularCustomerContactComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StockComponent,
    PaymentComponent,
    SalesComponent,
    AccountManageComponent,
    StockManageComponent,
    CustomerManageComponent,
    SalesManageComponent,
    PaymentManageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
