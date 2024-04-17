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
    [
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
    ],
    [
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

    ],
  ]

  popularProductsSmallScreen: any[] = []


  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    //* Veo si la pantalla es lo suficientemente pequeña
    if (window.innerWidth <= 992) {
      this.changeListMode()
    } else {
      this.popularProductsSmallScreen = []
    }

  }

  constructor() { }

  ngOnInit() {

    //* Veo si la pantalla es lo suficientemente pequeña
    if (window.innerWidth <= 992) {
      this.changeListMode()
    } else {
      this.popularProductsSmallScreen = []
    }

  }

  /**
   * Genera una lista con todos los items del listado con secciones de items
   */
  changeListMode() {

    //* Vacío el listado
    this.popularProductsSmallScreen = []

    //* Creo el listado con todos los items por separado
    this.popularProducts.forEach(section => {

      section.forEach((item: any) => {

        this.popularProductsSmallScreen.push(item)

      })

    })

  }

}
