import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DishesComponent } from './dishes.component';
import { DishesGridComponent } from './dishes-grid/dishes-grid.component';



@NgModule({
  imports: [RouterModule.forChild([
    { path: 'dishes', component: DishesComponent }
  ])],
  exports: [ RouterModule ]
})
export class DishesRoutingModule {}