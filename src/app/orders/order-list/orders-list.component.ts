import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';

import { Order } from './order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit, OnChanges {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propertyName in changes) {
      let changedProperty = changes[propertyName];
      if (!changedProperty.isFirstChange()) {
        this.orders.push(changedProperty.currentValue);
      }
    }
  }

  deleteOrder(orderId) {
    this.orders.splice(orderId, 1);
  }

  orders: Order[] = [
    {
      id: 1,
      type: 'food',
      title: 'Generic Food 1',
      addressee: 'Rupert Ellery',
      room: 101,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 2,
      type: 'book',
      title: 'Generic Book 1',
      addressee: 'Elyzabeth Truman',
      room: 102,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 3,
      type: 'kiosk',
      title: 'Generic Kiosk Item 1',
      addressee: 'Sequoia Ariel',
      room: 103,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 4,
      type: 'food',
      title: 'Generic Food 2',
      addressee: 'Prabhat Olympe',
      room: 104,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 5,
      type: 'book',
      title: 'Generic Book 2',
      addressee: 'Emma Madhukar',
      room: 105,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 6,
      type: 'food',
      title: 'Generic Food 1',
      addressee: 'Rupert Ellery',
      room: 101,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 7,
      type: 'book',
      title: 'Generic Book 1',
      addressee: 'Elyzabeth Truman',
      room: 102,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 8,
      type: 'kiosk',
      title: 'Generic Kiosk Item 1',
      addressee: 'Sequoia Ariel',
      room: 103,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 9,
      type: 'food',
      title: 'Generic Food 2',
      addressee: 'Prabhat Olympe',
      room: 104,
      timeAgo: 5,
      state: "Completed"
    },
    {
      id: 10,
      type: 'book',
      title: 'Generic Book 2',
      addressee: 'Emma Madhukar',
      room: 105,
      timeAgo: 5,
      state: "Completed"
    }
  ];

}