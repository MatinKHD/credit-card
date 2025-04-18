import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'seller/:id',
                loadComponent: () => import('./components/seller/seller.component').then(m => m.SellerComponent),
            },
            {
                path: 'client/:id',
                loadComponent: () => import('./components/client/client.component').then(m => m.ClientComponent),
            }
        ]
    }
]