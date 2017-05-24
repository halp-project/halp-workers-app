import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { Book } from './book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit, OnChanges {

  @Input() newBook: Book;
  books: Book[];
  error: any;

  constructor(private bookService: BookService) { }

  getBooks(): void{
    this.bookService.getBooks()
      .then(books => this.books = books)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getBooks();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.getBooks();
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
