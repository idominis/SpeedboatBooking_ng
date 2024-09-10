import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule // Add RouterModule to imports
  ]
})
export class MenuModule { }