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
