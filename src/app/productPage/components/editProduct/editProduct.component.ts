import { Component, OnInit } from '@angular/core';
import { ProductsFormComponent } from '../../../shared/components/productsForm/productsForm.component';
import { Router } from '@angular/router';
import { Product } from '../../types/product.interface ';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'pro-editProduct',
  standalone: true,
  templateUrl: './editProduct.component.html',
  styleUrls: ['./editProduct.component.css'],
  imports: [ProductsFormComponent]
})
export class EditProductComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }
  product!: Product
  ngOnInit() {
    this.product = history.state.product;
    console.log(this.product);
  }
  onSubmit(value: Product) {
    this.productService.updateProduct(value).subscribe(res => {
      if (res) {
        this.router.navigate(['/'])
      }
    })
  }
}
