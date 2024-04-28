import { Component, HostListener } from '@angular/core';
import { icons, products } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent {

  filters: any[] = [
    {
      text: 'POLLO'
    },
    {
      text: 'PATO'
    },
    {
      text: 'CODORNIZ'
    },
    {
      text: 'PAVO'
    },
    {
      text: 'COMBOS'
    },
    {
      text: 'VER TODO'
    },
  ]

  products: any[] = [
    {
      image: products.product1,
      name: 'REDONDO DE TERNERA ENTERO',
      price: 'OFERTA $4,00',
      aditionalInfo: 'PRECIO POR PIEZA 2,5 KG',
    },
    {
      image: products.product4,
      name: 'MILANESA DE POLLO',
      price: 'OFERTA $4,00',
      aditionalInfo: 'PRECIO POR PIEZA 2,5 KG',
    },
    {
      image: products.product8,
      name: 'REDONDO DE TERNERA ENTERO',
      price: 'OFERTA $4,00',
      aditionalInfo: 'PRECIO POR PIEZA 2,5 KG',
    },
    {
      image: products.product1,
      name: 'REDONDO DE TERNERA ENTERO',
      price: 'OFERTA $4,00',
      aditionalInfo: 'PRECIO POR PIEZA 2,5 KG',
    },
    {
      image: products.product4,
      name: 'MILANESA DE POLLO',
      price: 'OFERTA $4,00',
      aditionalInfo: 'PRECIO POR PIEZA 2,5 KG',
    },
    {
      image: products.product8,
      name: 'REDONDO DE TERNERA ENTERO',
      price: 'OFERTA $4,00',
      aditionalInfo: 'PRECIO POR PIEZA 2,5 KG',
    },

  ]

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

  items: any[] = [
    {
      icon: icons.corn,
      info: 'Elaborados sin gluten'
    },
    {
      icon: icons.house,
      info: 'Empresa familiar desde 1934'
    },
    {
      icon: icons.corn,
      info: 'Reparto en vehículo refrigerado'
    },
    {
      icon: icons.van,
      info: 'Envío GRATIS Pago seguro'
    },
  ]

}
