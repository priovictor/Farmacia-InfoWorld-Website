import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMedicinesComponent } from './management-medicines/add-medicines/add-medicines.component';
import { DeleteMedicinesComponent } from './management-medicines/delete-medicines/delete-medicines.component';
import { ListMedicinesComponent } from './management-medicines/list-medicines/list-medicines.component';
import { ManagementMedicinesComponent } from './management-medicines/management-medicines.component';
import { UpdateMedicinesComponent } from './management-medicines/update-medicines/update-medicines.component';
import { AddOrdersComponent } from './management-orders/add-orders/add-orders.component';
import { DeleteOrdersComponent } from './management-orders/delete-orders/delete-orders.component';
import { ListOrdersComponent } from './management-orders/list-orders/list-orders.component';
import { ManagementOrdersComponent } from './management-orders/management-orders.component';
import { UpdateOrdersComponent } from './management-orders/update-orders/update-orders.component';
import { AddPatientsComponent } from './management-patients/add-patients/add-patients.component';
import { DeletePatientsComponent } from './management-patients/delete-patients/delete-patients.component';
import { ListPatientsComponent } from './management-patients/list-patients/list-patients.component';
import { ManagementPatientsComponent } from './management-patients/management-patients.component';
import { UpdatePatientsComponent } from './management-patients/update-patients/update-patients.component';


const routes: Routes = [
  {
    component: HomeComponent,
    path:'home',
  },
  // Managements Routing
  {
    component: ManagementPatientsComponent,
    path:'management-patients',
  },
  {
    component: ManagementMedicinesComponent,
    path:'management-medicines',
  },
  {
    component: ManagementOrdersComponent,
    path:'management-orders',
  },

  //Routing for Management of Patients
  {
    component: ListPatientsComponent,
    path:'management-patients/list-patients',
  },
  {
    component: AddPatientsComponent,
    path:'management-patients/add-patients',
  },
  {
    component: UpdatePatientsComponent,
    path:'management-patients/update-patients',
  },
  {
    component: DeletePatientsComponent,
    path:'management-patients/delete-patients',
  },

  //Routing for Management of Medicines
  {
    component: ListMedicinesComponent,
    path:'management-medicines/list-medicines',
  },
  {
    component: AddMedicinesComponent,
    path:'management-medicines/add-medicines',
  },
  {
    component: UpdateMedicinesComponent,
    path:'management-medicines/update-medicines',
  },
  {
    component: DeleteMedicinesComponent,
    path:'management-medicines/delete-medicines',
  },

  //Routing for Management of Orders
  {
    component: ListOrdersComponent,
    path:'management-orders/list-orders',
  },
  {
    component: AddOrdersComponent,
    path:'management-orders/add-orders',
  },
  {
    component: UpdateOrdersComponent,
    path:'management-orders/update-orders',
  },
  {
    component: DeleteOrdersComponent,
    path:'management-orders/delete-orders',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
