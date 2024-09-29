import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

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
