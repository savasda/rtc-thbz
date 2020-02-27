import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyIventsComponent } from './duty-ivents.component';

describe('DutyIventsComponent', () => {
  let component: DutyIventsComponent;
  let fixture: ComponentFixture<DutyIventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutyIventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutyIventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
