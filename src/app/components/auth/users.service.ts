import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  async logInWithUsernameAndPassword(data: {
    username: string;
    password: string;
  }): Promise<{ token: string; user_id: number; email: string }> {
    const url = `${environment.baseUrl}/auth/`;
    const body = {
      action: 'login',
      username: data.username,
      password: data.password,
    };

    try {
      const response = await lastValueFrom(
        this.http.post<{ token: string; user_id: number; email: string }>(
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
