import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input() cardId: string = '';
  @Input() task: any;

  currentDraggedElement: string = '';

  startDragging(id: string) {
    this.currentDraggedElement = id;
  }

  openTask() {
    console.log('Task opened:', this.cardId);
  }
}
