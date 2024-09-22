import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private us: UsersService) {}

  username = '';
  password = '';

  async onLogin() {
    try {
      const res = await this.us.logInWithUsernameAndPassword(
        this.username,
        this.password
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
