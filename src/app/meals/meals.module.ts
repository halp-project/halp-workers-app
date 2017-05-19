import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsRoutingModule } from './meals-routing.module';

import { MealsComponent } from './meals.component'; 
import { DishesComponent } from './dishes/dishes.component'; 
import { MenusComponent } from './menus/menus.component'; 

@NgModule({
  imports: [
    CommonModule,
    MealsRoutingModule
  ],
  declarations: [
    MealsComponent,
    DishesComponent,
    MenusComponent
  ]
})
export class MealsModule { }
