import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from '../shared/components/productsForm/productsForm.component';

export const productRoutes: Route[] = [
    {  
  
      path:'',
      component:ProductsComponent,
    },
  {  

    path:'addproducts',
    component:ProductsFormComponent
  }
];

