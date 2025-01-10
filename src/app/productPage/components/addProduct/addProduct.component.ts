import { Component, OnInit, Output } from '@angular/core';
import { ProductsFormComponent } from '../../../shared/components/productsForm/productsForm.component';
import { Product } from '../../types/product.interface ';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'pro-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css'],
  imports: [ProductsFormComponent],
  standalone: true
})
export class AddProductComponent implements OnInit {
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(value: Product) {
    this.productService.addProduct(value).subscribe(res => {
      if (res) {

        this.router.navigate(['/'])
      }
    })
  }

}
