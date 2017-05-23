import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from './books-grid/book';

@Injectable()
export class BookService {
  private booksUrl = 'http://localhost:3000/books';  // URL to web api

  constructor(private http: Http) { }

  getBooks(): Promise<Array<Book>> {
    const url = this.booksUrl;

    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        let books: Book[] = [];
        let b : Book;
        for(let i = 0; i < response.json().data.length; i ++) {
          b = new Book(response.json().data[i].id,
                        response.json().data[i].title,
                        response.json().data[i].author,
                        response.json().data[i].description,
                        response.json().data[i].image);
          books.push(b);
        }
        return books as Book[];
      })
      .catch(this.handleError);
  }

  postBook(book: any): Promise<Book> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = this.booksUrl;
    return this.http
      .post(url, book, { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  editBook(id: number, book: Book): Promise<any> {
    const url = this.booksUrl+"/"+id;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    var res;
    return this.http
      .put(url, book)
      .toPromise()
      .then(() => "done")
      .catch(this.handleError);
  }

  deleteBook(id: number): Promise<any> {
    const url = this.booksUrl+"/"+id;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    var res;
    return this.http
      .delete(url)
      .toPromise()
      .then(() => "done")
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
