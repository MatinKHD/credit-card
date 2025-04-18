import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('../pages/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'home',
        loadChildren: () => import('../pages/home/home.routes').then(m => m.homeRoutes),
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
    }
];
