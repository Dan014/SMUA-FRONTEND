import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ProductComponent } from './components/product/product.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { EditFormUserComponent } from './components/edit-form-user/edit-form-user.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { VerProductFormComponent } from './components/ver-product-form/ver-product-form.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

//servicios

import { UserService } from '../app/service/user.service';

//Pipes
import { KeysPipe } from '../app/Pipes/key.pipe';
import { NoimagePipe } from '../app/Pipes/noimage.pipe';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProviderComponent } from './components/provider/provider.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {AddUbicationComponent } from './components/add-ubication/add-ubication.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DilogGenericComponent } from './components/dilog-generic/dilog-generic.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { DialogLocationComponent } from './components/dialog-location/dialog-location.component';
import { SaleHistoryComponent } from './components/sale-history/sale-history.component';
import { SaleComponent } from './components/sale/sale.component';
import { InfoExchangesComponent } from './components/info-exchanges/info-exchanges.component';
import { ReportComponent } from './components/report/report.component';
import { MoveReportComponent } from './components/move-report/move-report.component';
import { SalesNoReportComponent } from './components/sales-no-report/sales-no-report.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { ExpensesReportComponent } from './components/expenses-report/expenses-report.component';
import { ProfitReportComponent } from './components/profit-report/profit-report.component';
import { IncomeReportComponent } from './components/income-report/income-report.component';
import { VerSaleComponent } from './components/ver-sale/ver-sale.component';





import { ExitComponent } from './exit/exit.component';
import { DialogRutaComponent } from './components/dialog-ruta/dialog-ruta.component';

import { ErrorTailorModule } from '@ngneat/error-tailor';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    ProductComponent,
    UserAdminComponent,
    FormUserComponent,
    EditFormUserComponent,
    EditProductFormComponent,
    VerProductFormComponent,
    KeysPipe,
    NoimagePipe,
    LoginComponent,
    ExchangesComponent,
    InfoUserComponent,
    InventoryComponent,
    AddUbicationComponent,
    ListProductComponent,
    ProductInfoComponent,
    AddProductComponent,
    DilogGenericComponent,
    ProviderComponent,
    ShoppingCartComponent,
    SaleHistoryComponent,
    SaleComponent,
    ReportComponent,
    MoveReportComponent,
    SalesNoReportComponent,
    SalesReportComponent,
    ExpensesReportComponent,
    ProfitReportComponent,
    IncomeReportComponent,
    VerSaleComponent,


    DialogComponent,
    DialogLocationComponent,
    DialogRutaComponent,
    InfoExchangesComponent,
    ExitComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    HttpClientModule,

  ],
  entryComponents:[DialogComponent,DilogGenericComponent,DialogLocationComponent,DialogRutaComponent],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
