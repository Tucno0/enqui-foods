import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiRoutingModule } from './enqui-routing.module';
import { SharedModule } from '../shared/shared.module';

import { EnquiLayoutComponent } from './layouts/enqui-layout/enqui-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { SettingsComponent } from './pages/user/settings/settings.component';
import { AccountComponent } from './pages/user/account/account.component';

import { ProductsComponent } from './pages/maintenance/products/products.component';
import { SuppliersComponent } from './pages/maintenance/suppliers/suppliers.component';
import { ClientsComponent } from './pages/maintenance/clients/clients.component';
import { EmployeesComponent } from './pages/maintenance/employees/employees.component';
import { UsersComponent } from './pages/maintenance/users/users.component';

import { InputComponent } from './pages/lotes/input/input.component';
import { ProcessComponent } from './pages/lotes/process/process.component';
import { OutputComponent } from './pages/lotes/output/output.component';

import { SearchLoadingComponent } from './components/search-loading/search-loading.component';


@NgModule({
  declarations: [
    EnquiLayoutComponent,
    DashboardComponent,

    SettingsComponent,
    AccountComponent,

    ProductsComponent,
    SuppliersComponent,
    ClientsComponent,
    EmployeesComponent,
    UsersComponent,

    InputComponent,
    ProcessComponent,
    OutputComponent,

    SearchLoadingComponent
  ],
  imports: [
    CommonModule,
    EnquiRoutingModule,
    SharedModule
  ]
})
export class EnquiModule { }
