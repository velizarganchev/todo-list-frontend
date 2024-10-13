import { inject, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, tap, throwError } from 'rxjs';
import { ErrorService } from '../components/shared/error.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[] | undefined>([]);
  loadedTasks = this.tasks.asReadonly();

  http = inject(HttpClient);
  errorService = inject(ErrorService);

  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: `Token ${environment.baseToken}`
  });

  loadAllTasks() {
    return this.fetchAllTasks().pipe(tap({
      next: (tasks) => this.tasks.set(tasks)
    }))
  }

  private fetchAllTasks() {
    return this.http.get<Task[]>(`${environment.baseUrl}/all-tasks/`, { headers: this.httpHeaders })
      .pipe(catchError((error) => {
        console.log(error);
        return throwError(() => new Error('Something went wrong fetching the all Tasks'))
      }))
  }

  getSingleTask(taskId: number) {

  }

  addTask(taskData: Task) {
    return this.storeTask(taskData).pipe(tap({
      next: (response) => {
        const prevTasks = this.tasks() || [];
        if (!prevTasks.map(task => task.id === taskData.id)) {
          this.tasks.set(response);
        }
      }
    }));
  }

  private storeTask(task: Task) {
    const newTask = {
      ...task,
      id: undefined,
      members: task.members.map(member => member.id)
    }
    const prevTasks = this.tasks() || [];

    return this.http.post<Task[]>(`${environment.baseUrl}/single-task/`, newTask, { headers: this.httpHeaders })
      .pipe(catchError((error) => {
        this.errorService.showError('Something went wrong store the Task');
        this.tasks.set(prevTasks);
        return throwError(() => new Error('Something went wrong store the Task'))
      }))
  }

  updateTask(task: Task) {
    // const taskToUpdate = 

  }

  private update(task: Task) {
    return this.http.put<Task>(`${environment.baseUrl}/single-task/${task.id}/`, task, { headers: this.httpHeaders })
      .pipe(catchError((error) => {
        this.errorService.showError('Something went wrong update the Task');
        return throwError(() => new Error('Something went wrong update the Task'))
      }))
  }

  deleteTask(taskId: number) {
    return this.delete(taskId).pipe(tap({
      next: (res) => this.tasks.set(res)

    }))
  }

  private delete(id: number) {
    return this.http.post<Task[]>(`${environment.baseUrl}/single-task/${id}/`, { headers: this.httpHeaders })
      .pipe(catchError((error) => {
        this.errorService.showError('Something went wrong delete the Task');
        return throwError(() => new Error('Something went wrong delete the Task'))
      }))
  }

}
