import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ProductsLayoutComponent
  ],
  imports: [
    CommonModule,
    CmmModule,
    CoreModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }