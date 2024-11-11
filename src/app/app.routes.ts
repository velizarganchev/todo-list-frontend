import { Routes } from '@angular/router';

import { homeRoutes } from './components/home/home.routes'
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { loginGuard } from './components/auth/login.guard';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignupComponent },
    {
        path: '',
        component: HomeComponent,
        canActivate: [loginGuard],
        children: homeRoutes
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
