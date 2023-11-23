import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipTimeComponent } from './ship-time.component';

describe('ShipTimeComponent', () => {
  let component: ShipTimeComponent;
  let fixture: ComponentFixture<ShipTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
