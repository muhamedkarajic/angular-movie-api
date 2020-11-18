import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/components/app/app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  exports: [NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
