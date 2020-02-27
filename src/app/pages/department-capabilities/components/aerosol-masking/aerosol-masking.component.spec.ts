import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AerosolMaskingComponent } from './aerosol-masking.component';

describe('AerosolMaskingComponent', () => {
  let component: AerosolMaskingComponent;
  let fixture: ComponentFixture<AerosolMaskingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerosolMaskingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerosolMaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
