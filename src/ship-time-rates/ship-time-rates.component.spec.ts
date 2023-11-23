import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipTimeRatesComponent } from './ship-time-rates.component';

describe('ShipTimeRatesComponent', () => {
  let component: ShipTimeRatesComponent;
  let fixture: ComponentFixture<ShipTimeRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipTimeRatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipTimeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
