import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBookingComponent } from './transfer-booking.component';

describe('TransferBookingComponent', () => {
  let component: TransferBookingComponent;
  let fixture: ComponentFixture<TransferBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
