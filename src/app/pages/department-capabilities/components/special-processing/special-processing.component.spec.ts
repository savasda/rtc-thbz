import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProcessingComponent } from './special-processing.component';

describe('SpecialProcessingComponent', () => {
  let component: SpecialProcessingComponent;
  let fixture: ComponentFixture<SpecialProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
