import { Component } from '@angular/core';
import { products } from 'src/assets/images/image-routes';

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

}
