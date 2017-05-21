import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './order-list/orders-list.component';
import { OrderItemComponent } from './order-list/order-item/order-item.component';
import { OrderService } from './order.service';
@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [ OrdersComponent, OrdersListComponent, OrderItemComponent ],
  providers:[OrderService]
})
export class OrdersModule { }