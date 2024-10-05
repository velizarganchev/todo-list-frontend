import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) { }

  async SignInSignUpWithUsernameAndPassword(data: any): Promise<any> {
    const url = `${environment.baseUrl}/auth/`;

    let body = {};
    if (data.action === 'login') {
      body = {
        action: data.action,
        username: data.username,
        password: data.password,
      };
    } else if (data.action === 'register') {
      body = {
        action: data.action,
        username: data.username,
        email: data.email,
        password: data.password,
      };
    }
    try {
      const response: any = await lastValueFrom(
        this.http.post(
          url,
          body
        )
      );
      return response;
    } catch (error) {
      console.error('Fehler bei der Authentifizierung:', error);
      throw error;
    }
  }
}
