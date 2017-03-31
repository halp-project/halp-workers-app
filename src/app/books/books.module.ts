import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksGridComponent } from './books-grid/books-grid.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [ BooksComponent, BooksGridComponent ]
})
export class BooksModule { }
