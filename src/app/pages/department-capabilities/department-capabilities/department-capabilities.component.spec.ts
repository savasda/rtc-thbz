import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCapabilitiesComponent } from './department-capabilities.component';

describe('DepartmentCapabilitiesComponent', () => {
  let component: DepartmentCapabilitiesComponent;
  let fixture: ComponentFixture<DepartmentCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
