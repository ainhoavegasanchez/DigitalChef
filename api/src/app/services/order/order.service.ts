import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/Order';
import { Product } from '../../interfaces/Product';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _order: any;
  baseUrl = "https://vps-65482c69.vps.ovh.net/app/dist/php/orders";

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  get OrderGet(): any {
    return this._order;
  }

  set orderSet(order: any) {
    this._order = order;
  }

  insertOrder() {
    const user = this.userService.UserGet;
    const order = this.http.post(`${this.baseUrl}/insertOrder.php`, JSON.stringify(user));
    this.orderSet = order;
    return order;
  };

  getOrders() {
    const id = this.userService.UserGet.id;
    return this.http.get<Order[]>(`${this.baseUrl}/getOrder.php?id_usuario=${id}`);
  };

  updateOrder(order:Order){
    const orderReturn =  this.http.post(`${this.baseUrl}/updateOrder.php`, JSON.stringify(order));
    return orderReturn ;
  }


}
