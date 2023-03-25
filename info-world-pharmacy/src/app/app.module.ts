import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManagementPatientsComponent } from './management-patients/management-patients.component';
import { ManagementOrdersComponent } from './management-orders/management-orders.component';
import { ManagementMedicinesComponent } from './management-medicines/management-medicines.component';
import { ListMedicinesComponent } from './management-medicines/list-medicines/list-medicines.component';
import { AddMedicinesComponent } from './management-medicines/add-medicines/add-medicines.component';
import { UpdateMedicinesComponent } from './management-medicines/update-medicines/update-medicines.component';
import { DeleteMedicinesComponent } from './management-medicines/delete-medicines/delete-medicines.component';
import { ListOrdersComponent } from './management-orders/list-orders/list-orders.component';
import { AddOrdersComponent } from './management-orders/add-orders/add-orders.component';
import { UpdateOrdersComponent } from './management-orders/update-orders/update-orders.component';
import { DeleteOrdersComponent } from './management-orders/delete-orders/delete-orders.component';
import { ListPatientsComponent } from './management-patients/list-patients/list-patients.component';
import { AddPatientsComponent } from './management-patients/add-patients/add-patients.component';
import { UpdatePatientsComponent } from './management-patients/update-patients/update-patients.component';
import { DeletePatientsComponent } from './management-patients/delete-patients/delete-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManagementPatientsComponent,
    ManagementOrdersComponent,
    ManagementMedicinesComponent,
    ListMedicinesComponent,
    AddMedicinesComponent,
    UpdateMedicinesComponent,
    DeleteMedicinesComponent,
    ListOrdersComponent,
    AddOrdersComponent,
    UpdateOrdersComponent,
    DeleteOrdersComponent,
    ListPatientsComponent,
    AddPatientsComponent,
    UpdatePatientsComponent,
    DeletePatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
