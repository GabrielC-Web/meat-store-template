import { Component, HostListener } from '@angular/core';
import { CmmEcomFooterConfig } from 'src/app/common/data/utils/models/ecommerce.models';
import { icons, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  headerHeight: number = 0

  footerConfig: CmmEcomFooterConfig = {
    bgColor: '#343434',
    textClass: 'cmm-txt-project-primary',
    businessQualitiesConfig: {
      widthClass: 'col-sm-3'
    },
    items: [
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
    ],
    mainLogo: logos.main,
    mainLogoSize: { width: '60px', height: '60px' },
    socialNetworkIcons: [
      icons.instagram,
      icons.facebook,
    ],
    businessInfo: {
      name: 'TODO CARNES',
      direction: 'Av. Circumbalación del sol, calle 110 con av 62 de El Cafetal, Caracas',
      phone: '+58 0424-5555607',
      mail: 'atencion@nature.com'
    },
    products: [
      'Ropa',
      'Calzado',
      'Accesorios',
      'Damas',
      'Caballeros'
    ],
    aboutUs: [
      'Quienes somos',
      'Ventas al mayor',
      'Ofertas'
    ]
  }

  @HostListener('window:resize')
  onResize(e: any) {
    this.calculateHeaderSize()
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {

    this.repositionHeader()

  }

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    this.calculateHeaderSize()

  }

  /**
   * Calculo la altura del header
   */
  calculateHeaderSize() {
    this.headerHeight = document.getElementById('header')?.offsetHeight as number
  }

  getMainData() {

  }

  /**
   * Reposiciona el header dependiendo de la posición de scroll
   */
  repositionHeader() {

    let header = document.getElementById('header')

    if (header && window.scrollY > 0) {

      header.classList.add('fixed_header')

    } else if (header && window.scrollY == 0) {

      header.classList.remove('fixed_header')

    }

  }

}
