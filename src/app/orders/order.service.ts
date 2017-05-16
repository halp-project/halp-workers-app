import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Order } from './order-list/order';

@Injectable()
export class OrderService {
  private ordersUrl = 'http://localhost:3000/orders';  // URL to web api

  constructor(private http: Http) { }

  getBooks(): Promise<Array<Order>> {
    const url = this.ordersUrl;

    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        console.log(response);
        let orderArray: Order[];
        for(let i = 0; i < response.json().data.length; i ++) {
          let o : Order;
          o = new Order(response.json().data.get('id'), response.json().data.get('type'),);
        }
        return response.json().data as Book[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
