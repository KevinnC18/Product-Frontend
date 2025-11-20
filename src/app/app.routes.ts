import { Routes } from '@angular/router';
import { ProductoListComponent } from './components/producto-list/producto-list';
import { ProductoFormComponent } from './components/producto-form/producto-form';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'productos',
        pathMatch: 'full'
    },
    {
        path: 'productos',
        component: ProductoListComponent
    },
    {
        path: 'nuevo',
        component: ProductoFormComponent
    }
];
