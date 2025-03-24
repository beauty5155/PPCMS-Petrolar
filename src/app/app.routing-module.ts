import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountComponent } from './components/account/account.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from "./auth.guard";
import { RegularCustomerContactComponent } from './components/regular-customer-contact/regular-customer-contact.component';
import { StockComponent } from './components/stock/stock.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SalesComponent } from './components/sales/sales.component';
import { CustomerManageComponent } from './components/customer-manage/customer-manage.component';
import { StockManageComponent } from './components/stock-manage/stock-manage.component';
import { SalesManageComponent } from './components/sales-manage/sales-manage.component';
import { AccountManageComponent } from './components/account-manage/account-manage.component';
import { PaymentManageComponent } from './components/payment-manage/payment-manage.component';

const routes: Routes = [

    // { path: '**', component: NotFoundComponent },
    // { path: 'regcus', component: RegularCustomerContactComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard],
    // { path: 'dashboard', component: DashboardComponent ,
        children: [
            { path: 'home', component: HomeComponent },
            
            { path: 'account', component: AccountComponent },
            { path: 'accountAdd', component: AccountManageComponent },

            { path: 'stock', component: StockComponent },
            { path: 'stockAdd', component: StockManageComponent },

            { path: 'regcus', component: RegularCustomerContactComponent },
            { path: 'customerAdd', component: CustomerManageComponent },

            { path: 'payment', component: PaymentComponent },
            { path: 'paymentAdd/:cid', component: PaymentManageComponent },

            { path: 'sales', component: SalesComponent },
            { path: 'salesAdd', component: SalesManageComponent },

            { path: 'header', component: HeaderComponent },
            { path: 'footer', component: FooterComponent },
            // { path: '', pathMatch: 'full', redirectTo: '/login'},
            // { path: '**', component: NotFoundComponent }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    // providers: [authGuard]
})

export class AppRoutingModule { }

