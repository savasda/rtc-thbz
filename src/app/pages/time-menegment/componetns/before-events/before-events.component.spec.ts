import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeEventsComponent } from './before-events.component';

describe('BeforeEventsComponent', () => {
  let component: BeforeEventsComponent;
  let fixture: ComponentFixture<BeforeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
