import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeMenegmentComponent } from './time-menegment.component';

describe('TimeMenegmentComponent', () => {
  let component: TimeMenegmentComponent;
  let fixture: ComponentFixture<TimeMenegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeMenegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeMenegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
