import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import {UserAdminComponent  } from './components/user-admin/user-admin.component';
import {FormUserComponent  } from './components/form-user/form-user.component';
import {EditFormUserComponent  } from './components/edit-form-user/edit-form-user.component';
import {EditProductFormComponent  } from './components/edit-product-form/edit-product-form.component';
import {VerProductFormComponent  } from './components/ver-product-form/ver-product-form.component';
import {InventoryComponent  } from './components/inventory/inventory.component';
import {ListProductComponent  } from './components/list-product/list-product.component';
import {SaleComponent  } from './components/sale/sale.component';
import {InfoUserComponent  } from './components/info-user/info-user.component';
import {ProviderComponent  } from './components/provider/provider.component';
import {SaleHistoryComponent  } from './components/sale-history/sale-history.component';
import {ReportComponent  } from './components/report/report.component';
import {MoveReportComponent  } from './components/move-report/move-report.component';
import {SalesNoReportComponent  } from './components/sales-no-report/sales-no-report.component';
import {SalesReportComponent  } from './components/sales-report/sales-report.component';
import {ExpensesReportComponent  } from './components/expenses-report/expenses-report.component';
import {ProfitReportComponent  } from './components/profit-report/profit-report.component';
import {IncomeReportComponent  } from './components/income-report/income-report.component';
import {VerSaleComponent  } from './components/ver-sale/ver-sale.component';




import {  ProductInfoComponent} from './components/product-info/product-info.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { LoginComponent } from './components/login/login.component';
import {AddUbicationComponent} from './components/add-ubication/add-ubication.component';
import { InfoExchangesComponent } from './components/info-exchanges/info-exchanges.component';
import { ExitComponent } from './exit/exit.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '*', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'root', component:AppComponent},
  {path: 'exit', component:ExitComponent},
  {path: 'home', component:DashboardComponent},
  {path: 'product', component:ProductComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'form-user', component:FormUserComponent},
  {path: 'edit-form-user', component:EditFormUserComponent},
  {path: 'edit-product-form', component:EditProductFormComponent},
  {path: 'ver-product-form', component:VerProductFormComponent},
  {path: 'edit-form-user', component:EditFormUserComponent},
  {path: 'inventory', component:InventoryComponent},
  {path: 'list-product', component:ListProductComponent},
  {path: 'sale', component:SaleComponent},
  {path: 'info-user', component:InfoUserComponent},
  {path: 'provider', component:ProviderComponent},
  {path: 'sales-history', component:SaleHistoryComponent},
  {path: 'report', component:ReportComponent},
  {path: 'move-report', component:MoveReportComponent},
  {path: 'sales-no-report', component:SalesNoReportComponent},
  {path: 'sales-report', component:SalesReportComponent},
  {path: 'expenses-report', component:ExpensesReportComponent},
  {path: 'profit-report', component:ProfitReportComponent},
  {path: 'income-report', component:IncomeReportComponent},
  {path: 'ver-sale', component:VerSaleComponent},



  {path: 'product-info', component:ProductInfoComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'shopping-cart', component:ShoppingCartComponent},
  {path: 'exchanges', component:ExchangesComponent},
  {path: 'login', component:LoginComponent},
  {path: 'add-ubication', component:AddUbicationComponent},
  {path: 'info-exchange', component:InfoExchangesComponent},
  {path: 'user-admin', component:UserAdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
