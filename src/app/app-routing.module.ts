import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes =[
  {path: 'employee', component: EmployeeComponent},
 {path: 'employee-list', component: EmployeeListComponent},
 {path: 'employee-details', component: EmployeeDetailsComponent},
 /*{path: 'employee-list/:id', component: EmployeeListComponent}, */
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: '', redirectTo: '/employee-list', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ], 

  exports: [RouterModule]
})
export class AppRoutingModule { }
