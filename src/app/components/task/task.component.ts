import { Component, inject, input, OnInit } from '@angular/core';
import { TasksService } from '../../tasks-service/tasks.service';
import { Task } from '../../models/task.class';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  taskId = input<number>();
  tskService = inject(TasksService);
  task?: Task;

  currentDraggedElement?: number;

  ngOnInit(): void {
    this.task = this.tskService
      .loadedTasks()
      ?.find((ts) => ts.id === this.taskId());
  }

  startDragging(id?: number) {
    this.currentDraggedElement = id;
  }

  // onAddTask() {
  //   console.log('Task opened:', this.task);
  //   const data = this.task;
  //   this.tskService.addTask(data!).subscribe({
  //     next: (res) => console.log('RESPONSE TASK COMPONENT', res),
  //   });
  // }
}
