import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { NavigationComponent } from "./components/shared/navigation/navigation.component";
import { HeaderComponent } from "./components/shared/navigation/header/header.component";
import { ErrorService } from './components/shared/error.service';
import { ErrorModalComponent } from "./components/shared/modal/error-modal/error-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, NavigationComponent, HeaderComponent, ErrorModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Join';
  private errorService = inject(ErrorService);
  error = this.errorService.error;
}
