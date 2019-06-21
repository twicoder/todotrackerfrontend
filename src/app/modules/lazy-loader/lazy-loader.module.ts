import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: '../login/login.module#LoginModule'
  },
  {
    path: '', loadChildren: '../dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyLoaderModule { }
