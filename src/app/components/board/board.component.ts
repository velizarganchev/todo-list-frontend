import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

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
