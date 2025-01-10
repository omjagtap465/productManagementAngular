import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { filter, map, Observable } from 'rxjs';
import { Product } from '../../types/product.interface ';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'pro-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, RouterLink],
  standalone: true
})
export class ProductsComponent implements OnInit {
  isDeleting:boolean = false 
  constructor(private productService: ProductsService) { }
  products$!: Observable<Product[]>
  ngOnInit() {
    this.products$ = this.productService.getAllProducts()

  }
  deleteProduct(productDetaills: Product): void {
    this.isDeleting = true
  this.productService.deleteProduct(productDetaills).subscribe(data => console.log(data))
    this.products$ = this.productService.getAllProducts()
  };


}
