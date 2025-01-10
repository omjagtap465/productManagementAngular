import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/addProduct/addProduct.component';
import { EditProductComponent } from './components/editProduct/editProduct.component';

export const productRoutes: Route[] = [
    {  
  
      path:'',
      component:ProductsComponent,
    },
  {  

    path:'addproduct',
    component:AddProductComponent
  },
  {
    path:'editproduct',
    component:EditProductComponent
  }

];

