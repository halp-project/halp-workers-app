import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';


import { Book } from './book';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit, OnChanges {

  @Input() books: Book[];
  /*error: any;*/

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propertyName in changes) {
      let changedProperty = changes[propertyName];
      if (!changedProperty.isFirstChange()) {
        this.books.push(changedProperty.currentValue);
      }
    }
  }

  deleteBook(bookId: any) {
    this.books.splice(bookId, 1);
  }

}
