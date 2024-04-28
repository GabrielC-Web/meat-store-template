import { Component, HostListener } from '@angular/core';
import { products } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-detail-layout',
  templateUrl: './products-detail-layout.component.html',
  styleUrls: ['./products-detail-layout.component.scss']
})
export class ProductsDetailLayoutComponent {

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

  /**
   * Listado de productos
   */
  popularProducts: any[] = [
    {
      "image": "assets/images/products/chicken.png",
      "name": "REDONDO DE TERNERA ENTERO",
      "price": "OFERTA $4,00",
      "aditionalInfo": "PRECIO POR PIEZA 2,5 KG"
    },
    {
      "image": "assets/images/products/chicken_4.png",
      "name": "MILANESA DE POLLO",
      "price": "OFERTA $4,00",
      "aditionalInfo": "PRECIO POR PIEZA 2,5 KG"
    },
    {
      "image": "assets/images/products/meat.png",
      "name": "REDONDO DE TERNERA ENTERO",
      "price": "OFERTA $4,00",
      "aditionalInfo": "PRECIO POR PIEZA 2,5 KG"
    },
    {
      "image": "assets/images/products/meat.png",
      "name": "REDONDO DE TERNERA ENTERO",
      "price": "OFERTA $4,00",
      "aditionalInfo": "PRECIO POR PIEZA 2,5 KG"
    },
    {
      "image": "assets/images/products/chicken.png",
      "name": "REDONDO DE TERNERA ENTERO",
      "price": "OFERTA $4,00",
      "aditionalInfo": "PRECIO POR PIEZA 2,5 KG"
    },
    {
      "image": "assets/images/products/chicken_4.png",
      "name": "MILANESA DE POLLO",
      "price": "OFERTA $4,00",
      "aditionalInfo": "PRECIO POR PIEZA 2,5 KG"
    }
  ]


}
