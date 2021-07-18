import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMedsComponent } from './add-meds/add-meds.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedsSerachComponent } from './meds-serach/meds-serach.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' }, //Default Route
  {path: 'Dashboard', component: DashboardComponent},
  {path:'AddMedicines', component: AddMedsComponent},
  {path: 'ShowMedicines', component: MedicinesComponent},
  {path: 'SearchMedicines', component: MedsSerachComponent},
  {path: '**', component: PagenotfoundComponent}, //Page to be displayed when no route is found. // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
