import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingStationComponent } from './ordering-station.component';

describe('OrderingStationComponent', () => {
  let component: OrderingStationComponent;
  let fixture: ComponentFixture<OrderingStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderingStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderingStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
