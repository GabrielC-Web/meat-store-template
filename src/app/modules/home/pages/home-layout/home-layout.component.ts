import { Component, HostListener } from '@angular/core';
import { homeImages, icons, products } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  homeImages = homeImages

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

  /**
   * Producto seleccionado
   */
  productSelected: any

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

  constructor() {

  }

  ngOnInit() {
  }

  /**
   * Funcion para seleccionar el siguiente elemento del carrucel
   */
  nextElement() {
    // selecciono el ultimo elemento de mi arreglo de imagenes
    const last: number = this.popularProducts.length - 1;

    // selecciono la imagen que corresponde
    const nextImg = ++this.productSelected;
    if (nextImg > last) {
      this.selectTemplate(0);
    }
    else {
      this.selectTemplate(nextImg);
    }
  }

  /**
   * Funcion para seleccionar el anterior elemento del carrucel
   */
  prevElement() {
    // selecciono el ultimo elemento de mi arreglo de imagenes
    const last: number = this.popularProducts.length - 1;

    // selecciono la imagen que corresponde
    const nextImg = this.productSelected - 1;
    if (nextImg < 0) {
      this.selectTemplate(last);
    }
    else {
      this.selectTemplate(nextImg);
    }
  }

  /**
   * Funcion que selescciona el Templateo que se muestra en detalle segun la imagen que se seleccione
   * @param idImg
   */
  selectTemplate(idImg: number) {

    // Guardo el id de la imagen seleccionada
    this.productSelected = idImg;

  }

}
