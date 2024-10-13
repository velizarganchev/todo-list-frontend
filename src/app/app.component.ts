import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/auth/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { NavigationComponent } from "./components/shared/navigation/navigation.component";
import { HeaderComponent } from "./components/shared/navigation/header/header.component";
import { TasksService } from './tasks-service/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, NavigationComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Join';
}
