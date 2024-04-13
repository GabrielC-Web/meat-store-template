import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmmModule } from 'src/app/common/common.module';
import { CoreButtonComponent } from './components/core-button/core-button.component';
import { CoreBrandsComponent } from './components/core-brands/core-brands.component';


@NgModule({
    declarations: [
        CoreButtonComponent,
        CoreBrandsComponent
    ],
    imports: [
        CommonModule,
        CmmModule,
    ],
    exports: [
        CoreButtonComponent,
        CoreBrandsComponent
    ]
})
export class CoreModule { }
