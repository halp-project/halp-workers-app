import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Order } from './order-list/order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnChanges {
  oreder: Order;
  closeResult: string;
  id = 10;
  submitted = false;

  ordersCompleted: Order[] = [];
  ordersPending: Order[] = [];

  error: any;

  constructor(private modalService: NgbModal, private orderService: OrderService) { }

  getOrders(): void{
    this.orderService.getOrders()
      .then(orders => {
        for(let i = 0; i < orders.length; i++) {
          if(orders[i].completed){
            this.ordersCompleted.push(orders[i]);
          }else{
            this.ordersPending.push(orders[i]);
          }
        }
      })
      .catch(error => this.error = error);

    
  }

  ngOnInit() {
    this.getOrders();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.getOrders();
  }

  onSubmit() { this.submitted = true; }

  /*ordersCompleted: Order[] = [
      new Order(1, 'food', 'Generic Food 1', 'Rupert Ellery',
        101, new Date("2017-05-17T08:23:54.000Z"), true),
      new Order(2, 'book', 'Generic Book 1', 'Elyzabeth Truman',
        102, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(3, 'item', 'Generic Kiosk Item 1', 'Sequoia Ariel',
        103, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(4, 'food', 'Generic Food 2', 'Prabhat Olympe',
        104, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(5, 'book', 'Generic Book 2', 'Emma Madhukar',
        105, new Date("2013-10-19T08:23:54.000Z"), true)
    ];
    
  ordersPending: Order[] = [
      new Order(1, 'food', 'Generic Food 1', 'Rupert Ellery',
        101, new Date("2013-10-19T08:23:54.000Z"), false),
      new Order(2, 'book', 'Generic Book 1', 'Elyzabeth Truman',
        102, new Date("2013-10-19T08:23:54.000Z"), false),
      new Order(3, 'item', 'Generic Kiosk Item 1', 'Sequoia Ariel',
        103, new Date("2013-10-19T08:23:54.000Z"), false),
      new Order(4, 'food', 'Generic Food 2', 'Prabhat Olympe',
        104, new Date("2013-10-19T08:23:54.000Z"), false),
      new Order(5, 'book', 'Generic Book 2', 'Emma Madhukar',
        105, new Date("2013-10-19T08:23:54.000Z"), false)
  ];*/
}