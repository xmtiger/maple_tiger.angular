import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { DepartmentsRoutingModule } from './/departments-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentService } from './department.service';

import { ZtreeComponent } from '../ztree/ztree.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DepartmentsRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  declarations: [
    DepartmentListComponent,
    ZtreeComponent
  ],
  providers: [DepartmentService]
})
export class DepartmentsModule { }
