import { Component, OnInit } from '@angular/core';

import { Book } from './books-grid/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  newBook: Book;
  id: number = 7;

  constructor() { }

  ngOnInit() {
  }

  addNewBook() {
    this.id++;
    this.newBook = {
      id: this.id,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    };
  }

}
