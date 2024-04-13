import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  headerHeight: number = 0

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
