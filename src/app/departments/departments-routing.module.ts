import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';

const departmentRouts: Routes = [
  {path: 'api/departments', component: DepartmentListComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(departmentRouts)
  ],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
