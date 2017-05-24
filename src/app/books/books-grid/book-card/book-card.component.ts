import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Book } from '../book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  @Output() _delete: EventEmitter<number> = new EventEmitter();
  closeResult: string;
  submitted = false;
  newBook: Book;

  constructor(private bookService: BookService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  delete() {
    this.bookService.deleteBook(this.book.id);
    location.reload();
  }

  onSubmit(title, author, description, image) {
    this.book.title=title;
    this.book.author=author;
    this.book.description=description;
    this.book.image=image;
    this.bookService.editBook(this.book.id, this.book);
    location.reload();
    this.submitted = true;
  }

  edit(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
