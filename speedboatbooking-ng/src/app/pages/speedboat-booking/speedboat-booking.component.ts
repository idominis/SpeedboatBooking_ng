import { Component } from '@angular/core';

@Component({
  selector: 'app-speedboat-booking',
  templateUrl: './speedboat-booking.component.html',
  styleUrls: ['./speedboat-booking.component.scss'],
  standalone: true
})
export class SpeedboatBookingComponent {
  selectedSpeedboat: string = '';
  selectedBooker: string = '';
  selectedDate: string = '';
  withSkipper: boolean = true;

  onBook() {
    // Logika za potvrdu bukiranja - kasnije ćemo spojiti s API-jem
    console.log('Booking:', this.selectedSpeedboat, this.selectedBooker, this.selectedDate, this.withSkipper);
  }
}
