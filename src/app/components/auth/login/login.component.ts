import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private us: UsersService) {}

  loginData = {
    username: '',
    password: '',
  };

  async onLogin(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      try {
        const res: { token: string; user_id: number; email: string } =
          await this.us.logInWithUsernameAndPassword(this.loginData);
        localStorage.setItem('AuthToken', res.token);
        ngForm.resetForm();
      } catch (error) {
        this.handleError(error);
      }
    }
  }

  private handleError(error: any) {
    console.error('An error occurred during login:', error);
    // alert('Login failed. Please check your credentials and try again.');
  }
}
