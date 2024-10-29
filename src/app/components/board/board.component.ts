import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
  signal,
} from '@angular/core';

import { TasksService } from '../../tasks-service/tasks.service';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../models/task.class';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TaskComponent],
  providers: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  error = signal('');
  isFetching = signal(false);

  private tskService = inject(TasksService);
  destroyRef = inject(DestroyRef);

  tasks = this.tskService.loadedTasks;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.isFetching.set(true);

    const sub = this.tskService.loadAllTasks().subscribe({
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    });
  }

  openAddTask(status: string) {
    console.log(status);
  }

  getTaskByStatus(status: string): Task[] | undefined {
    return this.tasks()?.filter((task) => task.status === status);
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  highlight(id: string) {
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      this.renderer.addClass(element, 'dragAreaHighlight');
    }
  }

  removeHighlight(id: string) {
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      this.renderer.removeClass(element, 'dragAreaHighlight');
    }
  }

  moveTo(taskName: string) {
    console.log(`Move to ${taskName}`);
  }
}
