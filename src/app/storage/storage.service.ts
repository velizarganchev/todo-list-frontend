import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Task } from '../models/task.class';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  

  constructor() { }

  
}
