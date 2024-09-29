import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { SpeedboatBookingComponent } from './pages/speedboat-booking/speedboat-booking.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'speedboat-booking', component: SpeedboatBookingComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
