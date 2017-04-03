import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit, OnChanges {

  @Input() newProduct: Product;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propertyName in changes) {
      let changedProperty = changes[propertyName];
      if (!changedProperty.isFirstChange()) {
        this.products.push(changedProperty.currentValue);
      }
    }
  }

  deleteProduct(productId) {
    this.products.splice(productId, 1);
  }

  products: Product[] = [
    {
      id: 1,
      title: 'Atomic Design',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg',
      price: 1,
      quantity: 150
    },
    {
      id: 2,
      title: 'Atomic Design',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg',
      price: 1,
      quantity: 150
    },
    {
      id: 3,
      title: 'Atomic Design',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg',
      price: 1,
      quantity: 150
    },
    {
      id: 4,
      title: 'Atomic Design',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg',
      price: 1,
      quantity: 150
    },
    {
      id: 5,
      title: 'Atomic Design',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg',
      price: 1,
      quantity: 150
    },
    {
      id: 6,
      title: 'Atomic Design',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg',
      price: 1,
      quantity: 150
    },
    {
      id: 7,
      title: 'Atomic Design',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg',
      price: 1,
      quantity: 150
    }
  ];

}
