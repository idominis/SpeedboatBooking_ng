import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Ako koristiš SCSS
})
export class LoginComponent {
  username: string = '';  // Definiranje varijable username
  password: string = '';  // Definiranje varijable password

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'pass123') {
      localStorage.setItem('user', this.username);
      this.router.navigate(['/menu']); 
    } else {
      alert('Invalid credentials');
    }
  }
}
