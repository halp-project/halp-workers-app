import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksGridComponent } from './books-grid/books-grid.component';
import { BookCardComponent } from './books-grid/book-card/book-card.component';
import { BookService} from './book.service';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [ BooksComponent, BooksGridComponent, BookCardComponent ],
  providers: [BookService]
})
export class BooksModule { }
