import { NgModule } from '@angular/core';
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyLoaderModule { }
