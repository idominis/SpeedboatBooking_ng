import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SpeedboatBookingComponent } from './pages/speedboat-booking/speedboat-booking.component';
import { TransferBookingComponent } from './pages/transfer-booking/transfer-booking.component';
import { ShowTableComponent } from './pages/show-table/show-table.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ova ruta vodi na login
    { path: 'speedboat-booking', component: SpeedboatBookingComponent },
    { path: 'transfer-booking', component: TransferBookingComponent },
    { path: 'show-table', component: ShowTableComponent },
    { path: 'settings', component: SettingsComponent }
  ];


