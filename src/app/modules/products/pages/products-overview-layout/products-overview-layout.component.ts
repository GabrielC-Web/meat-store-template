import { Component } from '@angular/core';
import { products } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-overview-layout',
  templateUrl: './products-overview-layout.component.html',
  styleUrls: ['./products-overview-layout.component.scss']
})
export class ProductsOverviewLayoutComponent {

  productsList: any[] = [
    {
      image: products.product1,
      name: 'Correa de tiempo',
      brandName: 'General motors',
      sku: 'krogm93746917',
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
    {
      image: products.product1,
      name: 'Correa de tiempo',
      brandName: 'General motors',
      sku: 'krogm93746917',
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
    {
      image: products.product1,
      name: 'Correa de tiempo',
      brandName: 'General motors',
      sku: 'krogm93746917',
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
  ]

  prebill: any = {
    basePrice: 175,
    delivery: 175,
    totalPrice: 175,
    discount: '_ US$',
    currency: 'US$'
  }

}
