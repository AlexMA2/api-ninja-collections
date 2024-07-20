import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../app/pages/home/home.component').then(
                (m) => m.HomeComponent
            ),
    },
    {
        path: 'animals',
        loadComponent: () =>
            import('../app/pages/animals/animals.component').then(
                (m) => m.AnimalsComponent
            ),
    },
];
