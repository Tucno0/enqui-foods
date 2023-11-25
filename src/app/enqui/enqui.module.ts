import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiRoutingModule } from './enqui-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EnquiLayoutComponent } from './layouts/enqui-layout/enqui-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/user/settings/settings.component';
import { AccountComponent } from './pages/user/account/account.component';


@NgModule({
  declarations: [
    EnquiLayoutComponent,
    DashboardComponent,
    SettingsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    EnquiRoutingModule,
    SharedModule
  ]
})
export class EnquiModule { }
