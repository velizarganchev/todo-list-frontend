import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private us: UsersService, private router: Router) { }

  loginData = {
    action: 'login',
    username: '',
    password: '',
  };

  async onLogin(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      try {
        const res: { token: string; user_id: number; email: string } =
          await this.us.SignInSignUpWithUsernameAndPassword(this.loginData);
        localStorage.setItem('AuthToken', res.token);
        console.log(res);
        ngForm.resetForm();
        this.router.navigate(['/']);
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
