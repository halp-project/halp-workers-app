import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Book } from './books-grid/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  newBook: Book;
  closeResult: string;
  id = 7;
  submitted = false;

  constructor(private modalService: NgbModal, private bookService: BookService) { }

  ngOnInit() {
  }

  onSubmit(title, author, description, image) {
    this.newBook=new Book(1, title, author, description, image);
    console.log(JSON.stringify(this.newBook));
    this.bookService.postBook(JSON.stringify({ title: title, author: author, description: description, image: image }));
    location.reload();
    this.submitted = true;
  }

  openNewBookModal(content) {
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
