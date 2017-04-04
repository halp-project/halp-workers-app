import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

import { Order } from '../order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;
  @Output() _delete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  action() {
    if (this.order.state == "Completed") {
      this._delete.emit(this.order.id);
    } else {
      this._delete.emit(this.order.id);
    }
  }

  delete() {
    this._delete.emit(this.order.id);
  }

  getButtonClass() {
    if (this.order.state == "Completed") {
      return "btn btn-primary";
    } else {
      return "btn btn-success";
    }
  }

  getButtonImg() {
    if (this.order.state == "Completed") {
      return "fa fa-undo";
    } else {
      return "fa fa-check-circle-o";
    }
  }

}
