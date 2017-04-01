import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';

import { Book } from './book';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit, OnChanges {

  @Input() newBook: Book;
  @Output() editedBook: EventEmitter<Book> = new EventEmitter();

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

  deleteBook(bookId) {
    this.books.splice(bookId, 1);
  }

  editBook(book) {
    this.editedBook.emit(book);
  }

  books: Book[] = [
    {
      id: 1,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 2,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 3,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 4,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 5,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 6,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 7,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    }
  ];

}
