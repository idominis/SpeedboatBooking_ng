import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedboatBookingComponent } from './speedboat-booking.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule

@NgModule({
  declarations: [SpeedboatBookingComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // Add RouterModule to imports
  ]
})
export class SpeedboatBookingModule { }