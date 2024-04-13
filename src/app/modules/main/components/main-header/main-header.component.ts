import { Component } from '@angular/core';
import { icons, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  icons = icons

  mainLogo: string = logos.main

  buttons: any[] = [
    {
      text: 'CARNES',
      menus: [
        {
          text: 'Pollo'
        },
        {
          text: 'Pavo'
        },
        {
          text: 'Pato'
        },
      ]
    },
    {
      text: 'AVES',
      menus: [
        {
          text: 'Pollo'
        },
        {
          text: 'Pavo'
        },
        {
          text: 'Pato'
        },
      ]
    },
    {
      text: 'EMBUTIDOS',
      menus: [
        {
          text: 'Pollo'
        },
        {
          text: 'Pavo'
        },
        {
          text: 'Pato'
        },
      ]
    },
    {
      text: 'OFERTAS',
      menus: [
        {
          text: 'Pollo'
        },
        {
          text: 'Pavo'
        },
        {
          text: 'Pato'
        },
      ]
    },
  ]

}
