import { Component } from '@angular/core';
import { logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {

  mainLogo: string = logos.main

  footerLogoHeight: number = 0

  ngAfterViewInit() {

    this.footerLogoHeight = document.getElementById('footer_logo')?.offsetHeight as number

    console.log(this.footerLogoHeight);

  }

}
