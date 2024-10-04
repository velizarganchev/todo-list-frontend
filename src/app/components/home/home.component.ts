import { Component } from '@angular/core';
import { BoardComponent } from "../board/board.component";
import { HeaderComponent } from "../shared/navigation/header/header.component";
import { NavigationComponent } from "../shared/navigation/navigation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoardComponent, HeaderComponent, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
