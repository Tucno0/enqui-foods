import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'enqui',
    loadChildren:()=>import('./enqui/enqui.module').then(m=>m.EnquiModule)
  },
  {
    path:'',
    redirectTo: 'enqui',
    pathMatch: 'full'
  },
  {
    path: '**',
    // component: NopagefoundComponent
    redirectTo: 'enqui'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
