import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../productPage/services/products.service';
import { Router } from '@angular/router';
import { Product } from '../../../productPage/types/product.interface ';
@Component({
  selector: 'pro-productsForm',
  templateUrl: './productsForm.component.html',
  styleUrls: ['./productsForm.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class ProductsFormComponent implements OnInit {
  productForm: FormGroup;
  @Input() initialProduct?: Product;
  @Output() productStatus = new EventEmitter<Product>();

  constructor(private productService: ProductsService, private router: Router) {
    this.productForm = new FormGroup({
      productID: new FormControl(null, Validators.required),
      productName: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      stockQuantity: new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  ngOnInit() {
    if (this.initialProduct) {
      this.productForm.patchValue({
        productID: this.initialProduct.productID,
        productName: this.initialProduct.productName,
        category: this.initialProduct.category,
        price: this.initialProduct.price,
        stockQuantity: this.initialProduct.stockQuantity,
      })
    }
  }
  onSubmit() {
    console.log('Product Submitted:', this.productForm.value);
    
      return this.productStatus.emit(this.productForm.value)
  }

}
