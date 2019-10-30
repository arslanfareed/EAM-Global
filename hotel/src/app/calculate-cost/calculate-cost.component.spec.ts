import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateCostComponent } from './calculate-cost.component';

describe('CalculateCostComponent', () => {
  let component: CalculateCostComponent;
  let fixture: ComponentFixture<CalculateCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
