import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealsComponent } from './meals.component'; 
import { DishesComponent } from './dishes/dishes.component'; 
import { MenusComponent } from './menus/menus.component'; 

const routes: Routes = [
  {
    path: '',
    component: MealsComponent,
    children: [
      {
        path: 'dishes',
        loadChildren: './dishes/dishes.module#DishesModule'
      },
      {
        path: 'menus',
        loadChildren: './menus/menus.module#MenusModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MealsRoutingModule { }
