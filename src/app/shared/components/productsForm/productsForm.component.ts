import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../productPage/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pro-productsForm',
  templateUrl: './productsForm.component.html',
  styleUrls: ['./productsForm.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true
})
export class ProductsFormComponent implements OnInit {
  productForm: FormGroup;
  constructor (private productService:ProductsService,private router:Router){
    this.productForm = new FormGroup({
      productID: new FormControl(null, Validators.required),
      productName: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      stockQuantity: new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  ngOnInit() {

  }
  onSubmit() {
    console.log('Product Submitted:', this.productForm.value);
    const res = this.productService.addProduct(this.productForm.value)
    res.subscribe((value) => {
      if(value){
        this.router.navigate(['/'])
      }
    })
  }

}
