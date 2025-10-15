import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { Dashboard } from './page/dashboard/dashboard';
import { AppMainLayout } from './layout/component/app.main';
import { Buy } from './page/main/buy';
import { Sell } from './page/main/sell';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard }
        ]
    },
    {
        path: 'main',
        component: AppMainLayout,
        children: [
            { path: 'buy', component: Buy },
            { path: 'sell', component: Sell }
        ]
    },
    {
        path: '',
        redirectTo: 'main/buy', // Redirects from the base URL to your default view
        pathMatch: 'full'
    },
    { path: 'auth', loadChildren: () => import('./page/auth/auth.routes') },
];
