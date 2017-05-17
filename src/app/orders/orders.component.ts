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
    {
      id: 1,
      type: 'food',
      title: 'Generic Food 1',
      addressee: 'Rupert Ellery',
      room: 101,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Completed",
      image: "./assets/icons/food.svg"
    },
    {
      id: 2,
      type: 'book',
      title: 'Generic Book 1',
      addressee: 'Elyzabeth Truman',
      room: 102,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Completed",
      image: "./assets/icons/book.svg"
    },
    {
      id: 3,
      type: 'kiosk',
      title: 'Generic Kiosk Item 1',
      addressee: 'Sequoia Ariel',
      room: 103,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Completed",
      image: "./assets/icons/newspaper.svg"
    },
    {
      id: 4,
      type: 'food',
      title: 'Generic Food 2',
      addressee: 'Prabhat Olympe',
      room: 104,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Completed",
      image: "./assets/icons/food.svg"
    },
    {
      id: 5,
      type: 'book',
      title: 'Generic Book 2',
      addressee: 'Emma Madhukar',
      room: 105,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Completed",
      image: "./assets/icons/book.svg"
    }
  ];

  ordersPending: Order[] = [
    {
      id: 1,
      type: 'food',
      title: 'Generic Food 1',
      addressee: 'Rupert Ellery',
      room: 101,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Pending",
      image: "./assets/icons/food.svg"
    },
    {
      id: 2,
      type: 'book',
      title: 'Generic Book 1',
      addressee: 'Elyzabeth Truman',
      room: 102,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Pending",
      image: "./assets/icons/book.svg"
    },
    {
      id: 3,
      type: 'kiosk',
      title: 'Generic Kiosk Item 1',
      addressee: 'Sequoia Ariel',
      room: 103,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Pending",
      image: "./assets/icons/newspaper.svg"
    },
    {
      id: 4,
      type: 'food',
      title: 'Generic Food 2',
      addressee: 'Prabhat Olympe',
      room: 104,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Pending",
      image: "./assets/icons/food.svg"
    },
    {
      id: 5,
      type: 'book',
      title: 'Generic Book 2',
      addressee: 'Emma Madhukar',
      room: 105,
      date: new Date("2013-10-19T08:23:54.000Z"),
      state: "Pending",
      image: "./assets/icons/book.svg"
    }
  ];
}