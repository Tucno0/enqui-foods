import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiLayoutComponent } from './layouts/enqui-layout/enqui-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from '../shared/pages/nopagefound/nopagefound.component';

// User
import { SettingsComponent } from './pages/user/settings/settings.component';
import { AccountComponent } from './pages/user/account/account.component';

// Lotes
import { InputComponent } from './pages/lotes/input/input.component';
import { ProcessComponent } from './pages/lotes/process/process.component';
import { OutputComponent } from './pages/lotes/output/output.component';

// Mantenimientos
import { ProductsComponent } from './pages/maintenance/products/products.component';
import { SuppliersComponent } from './pages/maintenance/suppliers/suppliers.component';
import { ClientsComponent } from './pages/maintenance/clients/clients.component';
import { EmployeesComponent } from './pages/maintenance/employees/employees.component';
import { UsersComponent } from './pages/maintenance/users/users.component';


const tabTitle = 'Enqui Foods';

const routes: Routes = [
  {
    path: '',
    component: EnquiLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, title: `${tabTitle} - Dashboard` },

      // Lotes
      { path: 'input', component: InputComponent, title: `Lotes - Entrada` },
      { path: 'process', component: ProcessComponent, title: `Lotes - Proceso` },
      { path: 'output', component: OutputComponent, title: `Lotes - Salida` },

      // Mantenimientos
      { path: 'products', component: ProductsComponent, title: `Mantenimiento - Productos` },
      { path: 'suppliers', component: SuppliersComponent, title: `Mantenimiento - Proveedores` },
      { path: 'clients', component: ClientsComponent, title: `Mantenimiento - Clientes` },
      { path: 'employees', component: EmployeesComponent, title: `Mantenimiento - Empleados` },
      { path: 'users', component: UsersComponent, title: `Mantenimiento - Usuarios` },

      // User
      { path: 'account', component: AccountComponent, title: `${tabTitle} - Mi cuenta` },
      { path: 'settings', component: SettingsComponent, title: `${tabTitle} - Configuración` },

      // Default
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: NopagefoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiRoutingModule { }
