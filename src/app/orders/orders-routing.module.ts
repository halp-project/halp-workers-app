import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'orders', component: OrdersComponent }
  ])],
  exports: [ RouterModule ]
})
export class OrdersRoutingModule {}