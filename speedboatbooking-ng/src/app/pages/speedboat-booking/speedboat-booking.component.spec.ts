import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedboatBookingComponent } from './speedboat-booking.component';

describe('SpeedboatBookingComponent', () => {
  let component: SpeedboatBookingComponent;
  let fixture: ComponentFixture<SpeedboatBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedboatBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedboatBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
