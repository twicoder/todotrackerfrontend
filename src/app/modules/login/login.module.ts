import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './login/login.component';
import { LoginRouterModule } from './login.router';
import { MaterialLoaderModule } from '../material-loader/material-loader.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRouterModule,
    ToastrModule.forRoot(),
    MaterialLoaderModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
