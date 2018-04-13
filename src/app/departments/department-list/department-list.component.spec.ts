import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DepartmentListComponent } from './department-list.component';
import { ZtreeComponent } from '../../ztree/ztree.component';
import { DepartmentService } from '../department.service';
import { HttpClientModule } from '@angular/common/http';

describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTabsModule, BrowserAnimationsModule, HttpClientModule],
      declarations: [ DepartmentListComponent , ZtreeComponent],
      providers: [DepartmentService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
