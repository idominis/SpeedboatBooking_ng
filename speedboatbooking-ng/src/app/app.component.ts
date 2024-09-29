import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, NgIf], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  checkRoute() {
    this.showMenu = this.router.url !== '/login'; // Sakrij izbornik ako je na login ruti
  }
}
