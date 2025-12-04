import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,RouterLink} from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLoggedIn = false;     // set true to preview authenticated UI
  isAdmin = false;        // set true to preview admin-specific UI
  cartCount = 0;          // set >0 to preview cart badge
  username = 'Jane Doe';  // placeholder username for preview

  setGuest() {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.cartCount = 0;
    this.username = '';
  }

  setCustomer(username = 'Jane Doe', cartCount = 2) {
    this.isLoggedIn = true;
    this.isAdmin = false;
    this.username = username;
    this.cartCount = cartCount;
  }

  setAdmin(username = 'Admin', cartCount = 0) {
    this.isLoggedIn = true;
    this.isAdmin = true;
    this.username = username;
    this.cartCount = cartCount;
  }

  // UI stubs for interactions (no backend)
  logout() {
    // future: authService.logout();
    console.log('UI-only logout clicked');
    this.setGuest();
  }
  }



