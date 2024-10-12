import { Component, ElementRef, inject, OnInit, Renderer2, signal } from '@angular/core';;
import { TasksService } from '../../tasks-service/tasks.service';
import { TaskComponent } from "../task/task.component";
import { Task } from '../../models/task.class';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TaskComponent],
  providers: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})

export class BoardComponent implements OnInit {
  tasks = signal<Task[] | undefined>([]);

  public tskService = inject(TasksService);

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  openAddTask(status: string) {
    console.log(status);

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
