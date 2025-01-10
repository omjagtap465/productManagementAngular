import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product.interface ';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  private apiUrl: string = `http://localhost:5186/product`;
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }
  addProduct(productDetails: Product): Observable<boolean> {
    const body = productDetails
    console.log(body)
    return this.http.post<boolean>(this.apiUrl, body)
  }
  deleteProduct(productDetails: Product): Observable<boolean> {
    console.log(productDetails)
    return this.http.delete<boolean>(this.apiUrl, { body: productDetails });
  }
  updateProduct(productDetails: Product): Observable<boolean> {
    console.log(productDetails);
    return this.http.put<boolean>(this.apiUrl,productDetails);

  }
}
