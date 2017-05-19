import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { MenusGridComponent } from './menus-grid/menus-grid.component';
import { MenuCardComponent } from './menus-grid/menu-card/menu-card.component';

@NgModule({
  imports: [
    CommonModule,
    MenusRoutingModule
  ],
  declarations: [ MenusComponent, MenusGridComponent, MenuCardComponent ]
})
export class MenusModule { }