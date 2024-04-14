import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
