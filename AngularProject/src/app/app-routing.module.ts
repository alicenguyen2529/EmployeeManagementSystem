import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component:CreateEmployeeComponent},
  {path: 'update-employees/:id', component: UpdateEmployeesComponent},
  {path: 'employee-detail/:id', component: EmployeeDetailComponent},
  {path: '',redirectTo: 'employees', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
