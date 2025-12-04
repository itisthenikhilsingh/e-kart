import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  form = {
    email: '',
    password: '',
    remember: false
  };

  // UI-only state for showing password
  showPassword = false;

  // Simple email validation (UI only). You can replace with a more robust check/server-side later.
  isEmailValid(): boolean {
    if (!this.form.email) return false;
    // simple RFC-light regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
  }

  isFormValid(): boolean {
    return this.isEmailValid() && this.form.password.trim().length > 0;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onLoginUIOnly() {
    if (!this.isFormValid()) {
      console.warn('Login prevented — form invalid (UI-only).');
      return;
    }

    // UI-only: future integration point
    // e.g. authService.login(this.form).subscribe(...)
    console.log('UI-only login:', this.form);
  }

}
