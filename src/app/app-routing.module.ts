import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/pages/category/category.component';
import { CostComponent } from './components/pages/cost/cost.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FoodsComponent } from './components/pages/foods/foods.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { TagsComponent } from './components/pages/tags/tags.component';
import { TransactionComponent } from './components/pages/transaction/transaction.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'foods', component: FoodsComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'tags', component: TagsComponent},
  { path: 'cost', component: CostComponent },
  { path: 'reports', component: ReportsComponent},
  { path: 'transactions', component: TransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
