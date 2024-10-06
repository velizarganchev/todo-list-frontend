import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = `${environment.baseUrl}auth/`;

  constructor(private http: HttpClient) { }

  async SignInSignUpWithUsernameAndPassword(data: any): Promise<any> {

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
          this.url,
          body
        )
      );
      return response;
    } catch (error) {
      console.error('Fehler bei der Authentifizierung:', error);
      throw error;
    }
  }

  Logout(): Observable<any> {
    const token = localStorage.getItem('AuthToken');
    if (token) {
      console.log(token);

      const httpHeaders: HttpHeaders = new HttpHeaders({
        Authorization: `Token ${token}`
      });
      return this.http.post(this.url, { action: 'logout' }, { headers: httpHeaders })
    }
    throw new Error('No AuthToken found');
  }
}
