import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Task } from '../models/task.class';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  http = inject(HttpClient);

  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: `Token ${environment.baseToken}`
  });

  constructor() { }

  fetchAllTasks() {
    return this.http.get<Task[]>(`${environment.baseUrl}/all-tasks/`, { headers: this.httpHeaders })
      .pipe(catchError((error) => {
        console.log(error);
        return throwError(() => new Error('Something went wrong fetching the all Tasks'))
      }))
  }
}
