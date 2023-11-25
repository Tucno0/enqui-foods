import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiLayoutComponent } from './layouts/enqui-layout/enqui-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from '../shared/pages/nopagefound/nopagefound.component';
import { SettingsComponent } from './pages/user/settings/settings.component';
import { AccountComponent } from './pages/user/account/account.component';

const tabTitle = 'Enqui Foods';

const routes: Routes = [
  {
    path: '',
    component: EnquiLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, title: `${tabTitle} - Dashboard` },

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
