import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByManagerComponent } from './by-manager.component';

describe('ByManagerComponent', () => {
  let component: ByManagerComponent;
  let fixture: ComponentFixture<ByManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
