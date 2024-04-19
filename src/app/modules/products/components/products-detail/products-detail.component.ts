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
    sku: 'KROGGM93746917',
    partNumber: '93746917',
    maximunPurchase: 1,
    quantity: 1,
    description: 'Piezas de pollo marca Protinal',
    aditionalDetails: {
      size: 'Dimensiones 9x30x9cm3',
      weight: '0,9 kg.',
      applicationModels: [
        '2005-2014 | CHEVROLET | AVEO | 3 PUERTAS',
        '2005-2014 | CHEVROLET | AVEO | 3 PUERTAS LT',
        '2005-2014 | CHEVROLET | AVEO | 4 PUERTAS',
        '2005-2014 | CHEVROLET | AVEO | 4 PUERTAS LT',
        '2005-2014 | CHEVROLET | AVEO | 5 PUERTAS',
      ]
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
