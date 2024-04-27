import { Component, Input } from '@angular/core';
import { products } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {

  @Input() product = {
    images: [
      products.product4,
    ],
    mainImage: products.product4,
    name: 'MUSLO DE POLLO',
    brand: 'PROTINAL',
    price: '175.00',
    details: {
      'SKU': 'KROGGM93746917',
    },
    quantity: 1,
    description: {
      'Piezas de pollo marca Protinal': '',
      'Fecha de corte': '22 de marzo',
      'Características': '750 gramos de muslo'
    }
  }

  /**
   * Añade más unidades del producto
   */
  addProductUnit() {

    this.product.quantity += 1

  }

  /**
   * Elimina unidades del producto
   */
  removeProductUnit() {

    this.product.quantity -= 1

    if (this.product.quantity < 1) {
      this.product.quantity = 1
    }

  }

}
