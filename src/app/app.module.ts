import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginsComponent } from './logins/logins.component';
import { LoginnComponent } from './loginn/loginn.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GridfilterPipe } from './gridfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginsComponent,
    LoginnComponent,
    DataentryComponent,
    HomeComponent,
    GridfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }