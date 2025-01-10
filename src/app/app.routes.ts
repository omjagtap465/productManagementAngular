import { Routes } from '@angular/router';

export const approutes: Routes= [
    {
        path:'',
        loadChildren:() => import('./productPage/products.routes').then((r) => r.productRoutes),
    }
];
