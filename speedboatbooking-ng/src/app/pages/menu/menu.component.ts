import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WindowRefService } from '../../services/window-ref.service';

@Component({
  standalone: true,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class MenuComponent {
  isDesktopView: boolean = true;
  isMenuOpen: boolean = false;

  constructor(private windowRef: WindowRefService) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const window = this.windowRef.nativeWindow;
    if (window) {
      this.isDesktopView = window.innerWidth > 768;
      if (this.isDesktopView) {
        this.isMenuOpen = false; // Zatvori meni kad se vraća na desktop view
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Ovdje se mijenja stanje menija
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
