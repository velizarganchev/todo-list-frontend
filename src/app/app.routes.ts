import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { BoardComponent } from './components/board/board.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'board', component: BoardComponent },
            { path: 'add-task', component: AddTaskComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignupComponent },
];
