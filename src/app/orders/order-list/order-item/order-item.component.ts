import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

import { Order } from '../order';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;
  @Output() _delete: EventEmitter<number> = new EventEmitter();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  action() {
    if (this.order.completed) {
      this.order.completed = false;
      this.orderService.updateOrder(this.order.id, this.order);
    } else {
      this.order.completed = true;
      this.orderService.updateOrder(this.order.id, this.order);
    }
    location.reload();
  }

  delete() {
    console.log(this.order.id);
    this.orderService.deleteOrder(this.order.id);
    location.reload();
  }

  getButtonClass() {
    if (this.order.completed) {
      return "btn btn-primary";
    } else {
      return "btn btn-success";
    }
  }

  getButtonImg() {
    if (this.order.completed) {
      return "fa fa-undo";
    } else {
      return "fa fa-check-circle-o";
    }
  }

}
