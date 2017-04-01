import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Output() _delete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this._delete.emit(this.book.id);
  }

}
