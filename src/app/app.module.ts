import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar/';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { FoodsComponent } from './components/pages/foods/foods.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { TagsComponent } from './components/pages/tags/tags.component';
import { CostComponent } from './components/pages/cost/cost.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { TransactionComponent } from './components/pages/transaction/transaction.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { ResetComponent } from './components/pages/auth/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    OrdersComponent,
    FoodsComponent,
    CategoryComponent,
    TagsComponent,
    CostComponent,
    ReportsComponent,
    TransactionComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent, SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
