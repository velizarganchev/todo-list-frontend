import { Component, inject, input, OnInit } from '@angular/core';
import { Task } from '../../../models/task.class';
import { TasksService } from '../../../services/tasks/tasks.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent implements OnInit {
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
