import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Order } from './order-list/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  oreder: Order;
  closeResult: string;
  id = 10;
  submitted = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  ordersCompleted: Order[] = [
      new Order(1, 'food', 'Generic Food 1', 'Rupert Ellery',
        101, new Date("2017-05-17T08:23:54.000Z"), 'Completed'),
      new Order(2, 'book', 'Generic Book 1', 'Elyzabeth Truman',
        102, new Date("2013-10-19T08:23:54.000Z"), "Completed"),
      new Order(3, 'item', 'Generic Kiosk Item 1', 'Sequoia Ariel',
        103, new Date("2013-10-19T08:23:54.000Z"), "Completed"),
      new Order(4, 'food', 'Generic Food 2', 'Prabhat Olympe',
        104, new Date("2013-10-19T08:23:54.000Z"), "Completed"),
      new Order(5, 'book', 'Generic Book 2', 'Emma Madhukar',
        105, new Date("2013-10-19T08:23:54.000Z"), "Completed")
    ];
    
  ordersPending: Order[] = [
      new Order(1, 'food', 'Generic Food 1', 'Rupert Ellery',
        101, new Date("2013-10-19T08:23:54.000Z"), 'Pending'),
      new Order(2, 'book', 'Generic Book 1', 'Elyzabeth Truman',
        102, new Date("2013-10-19T08:23:54.000Z"), "Pending"),
      new Order(3, 'item', 'Generic Kiosk Item 1', 'Sequoia Ariel',
        103, new Date("2013-10-19T08:23:54.000Z"), "Pending"),
      new Order(4, 'food', 'Generic Food 2', 'Prabhat Olympe',
        104, new Date("2013-10-19T08:23:54.000Z"), "Pending"),
      new Order(5, 'book', 'Generic Book 2', 'Emma Madhukar',
        105, new Date("2013-10-19T08:23:54.000Z"), "Pending")
    ];
}