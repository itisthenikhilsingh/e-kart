import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone:true
})
export class Register {
  form = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Individual checks moved here (no regex in template)
  hasLength(): boolean {
    return this.form.password.length >= 8;
  }

  hasNumber(): boolean {
    return /\d/.test(this.form.password);
  }

  hasSpecial(): boolean {
    return /[^A-Za-z0-9]/.test(this.form.password);
  }

  // Combined checks
  isPasswordValid(): boolean {
    return this.hasLength() && this.hasNumber() && this.hasSpecial();
  }

  isConfirmMatch(): boolean {
    return (
      this.form.confirmPassword.length > 0 &&
      this.form.password === this.form.confirmPassword
    );
  }

  isFormValid(): boolean {
    return (
      this.form.name.trim().length > 0 &&
      this.form.email.trim().length > 0 &&
      this.isPasswordValid() &&
      this.isConfirmMatch()
    );
  }

  onRegisterUIOnly() {
    // Prevent submission if invalid (defensive)
    if (!this.isFormValid()) {
      console.warn('Form invalid — registration prevented (UI-only).');
      return;
    }

    // UI-only submit action
    console.log('UI-only register', this.form);
    // Future: call authService.register(...)
  }

}
