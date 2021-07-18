import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesComponent } from './medicines/medicines.component';

import { HttpClientModule } from '@angular/common/http';
import { MedsSerachComponent } from './meds-serach/meds-serach.component';
import { AddMedsComponent } from './add-meds/add-meds.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'; //step 1: To make HttpClient available throughout the application

@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    MedsSerachComponent,
    AddMedsComponent,
    DashboardComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,  //step 2: To make HttpClient available throughout the application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
