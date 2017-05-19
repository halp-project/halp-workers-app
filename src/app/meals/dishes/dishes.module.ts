import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesComponent } from './dishes.component';
import { DishesGridComponent } from './dishes-grid/dishes-grid.component';
import { DishCardComponent } from './dishes-grid/dish-card/dish-card.component';

@NgModule({
  imports: [
    CommonModule,
    DishesRoutingModule
  ],
  declarations: [ DishesComponent, DishesGridComponent, DishCardComponent]
})
export class DishesModule { }