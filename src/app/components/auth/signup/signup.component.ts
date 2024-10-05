import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signUpData = {
    action: 'register',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    privacyPolicy: false
  };

  constructor(private us: UsersService) { }

  async onSignUp(ngForm: NgForm) {
    console.log('Form valid:', ngForm.valid);
    console.log('Form values:', this.signUpData);
    if (ngForm.valid && this.signUpData.password === this.signUpData.confirmPassword) {
      console.log('Form is valid and passwords match.');
      try {
        const res: {
          user_id: number,
          username: string,
          email: string,
          token: string
        } =
          await this.us.SignInSignUpWithUsernameAndPassword(this.signUpData);
        localStorage.setItem('AuthToken', res.token);
        console.log(res);

        ngForm.resetForm();
      } catch (error) {
        this.handleError(error);
      }
    } else {
      console.log('Form is invalid or passwords do not match.');
    }
  }
  private handleError(error: any) {
    console.error('An error occurred during login:', error);
    // alert('Login failed. Please check your credentials and try again.');
  }
}
