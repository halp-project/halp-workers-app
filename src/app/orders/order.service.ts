import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Order } from './order-list/order';

@Injectable()
export class OrderService {
  private ordersUrl = 'http://localhost:3000/orders';  // URL to web api

  constructor(private http: Http) { }

  getOrders(): Promise<Array<Order>> {
    const url = this.ordersUrl;

    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        let orders: Order[] = [];
        let o : Order;
        for(let i = 0; i < response.json().data.length; i ++) {
          o = new Order(response.json().data[i].id, 
                        response.json().data[i].type,
                        response.json().data[i].title,
                        response.json().data[i].name 
                        + " " + response.json().data[i].lastname,
                        response.json().data[i].room,
                        new Date(response.json().data[i].orderdate),
                        response.json().data[i].completed);
          orders.push(o);
        }
        return orders as Order[];
      })
      .catch(this.handleError);
  }


  updateOrder(id: number, order: Order): Promise<any> {
    const url = this.ordersUrl+"/"+id;
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    var res;
    return this.http
      .put(url, order)
      .toPromise()
      .then(() => "done")
      .catch(this.handleError);
  }


  deleteOrder(id: number): Promise<any> {
    const url = this.ordersUrl+"/"+id;
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
