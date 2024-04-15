import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-core-product-card',
  templateUrl: './core-product-card.component.html',
  styleUrls: ['./core-product-card.component.scss']
})
export class CoreProductCardComponent {

  @Input() data: any

  /**
   * Color de fondo
   */
  @Input() bgColor: string = '#947676'

  /**
   * Cantidad de producto agragada al carrito
   */
  productQuantity: number = 0

}
