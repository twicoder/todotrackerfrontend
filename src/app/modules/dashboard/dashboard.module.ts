import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRouterModule } from './dashboard.router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRouterModule
  ]
})
export class DashboardModule { }
