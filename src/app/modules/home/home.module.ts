import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { CmmModule } from 'src/app/common/common.module';


@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    CmmModule,
    CoreModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
