import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Dodaj FormsModule

@Component({
  standalone: true, // Ako koristiš standalone
  imports: [FormsModule], // Dodaj FormsModule u imports
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'pass123') {
      localStorage.setItem('user', this.username);
      this.router.navigate(['/menu/speedboat-booking']); // Preusmjeri na menu s početnom stavkom
    } else {
      alert('Invalid credentials');
    }
  }
}
