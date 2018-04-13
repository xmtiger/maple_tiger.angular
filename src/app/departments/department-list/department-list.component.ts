import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  tabs = [{title: 'tab1', content: 'content1'},
          {title: 'tab2', content: 'content2'}
        ];

  errorMessage: string;
  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      departments => this.departments = departments,
      error => this.errorMessage = <any> error );
  }

}
