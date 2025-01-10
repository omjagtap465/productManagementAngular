import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './productPage/components/products/products.component';

@Component({
  selector: 'pro-root',
  standalone: true,
  imports: [ProductsComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productManagement';
}
