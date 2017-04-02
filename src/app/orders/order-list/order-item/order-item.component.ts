import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { Order } from '../order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

}