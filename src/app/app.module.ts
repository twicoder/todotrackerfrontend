import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyLoaderModule } from './modules/lazy-loader/lazy-loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LazyLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
