import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.class';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal<Task[] | undefined>([]);
  loadedTasks = this.tasks.asReadonly();

  error = signal('');
  isFetching = signal(false);

  storageService = inject(StorageService);
  destroyRef = inject(DestroyRef);


  constructor() { }

  async setAllTasks() {
    this.isFetching.set(true);

    const sub = this.storageService.fetchAllTasks().subscribe({
      next: (data) => {
        this.tasks.set(data);
      },
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    })
  }

  getSingleTask(taskId: number) {

  }

  addTask(taskData: Task) {
    const newTask: Task = {
      ...taskData,
      id: Math.random()
    }

    this.tasks.update((oldTasks) => [...oldTasks!, newTask]);
  }

  updateTask(taskId: number) {

  }

  deleteTask(taskId: number) {

  }

}
