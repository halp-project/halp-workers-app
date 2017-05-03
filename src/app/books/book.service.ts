import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from './books-grid/book';
import { contentHeaders } from './headers';

@Injectable()
export class BookService {
  private booksUrl = 'http://localhost:3000/books';  // URL to web api

  constructor(private http: Http) { }

  getBooks(): Promise<Array<Book>> {
    const url = `${this.booksUrl}/getAll`;

    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        return response.json().data as Book[];
      })
      .catch(this.handleError);
  }


  private post(book: Book): Promise<Book> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.booksUrl, JSON.stringify(book), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
