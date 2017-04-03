import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KioskRoutingModule } from './kiosk-routing.module';
import { KioskComponent } from './kiosk.component';
import { ProductsGridComponent } from './product-grid/products-grid.component';
import { ProductCardComponent } from './product-grid/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    KioskRoutingModule
  ],
  declarations: [ KioskComponent, ProductsGridComponent, ProductCardComponent ]
})
export class KioskModule { }
