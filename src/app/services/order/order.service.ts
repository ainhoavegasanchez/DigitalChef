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
  baseUrl = "https://vps-65482c69.vps.ovh.net/php/orders";

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
    return this.http.get<Order>(`${this.baseUrl}/getOrder.php?id_usuario=${id}`);
  };

  insertDetailOrder(id_pedido: number, id_usuario: number, product: Product, cantidad: number): void {
    this.http.post(`${this.baseUrl}/insertDetailOrder.php`, [id_pedido, id_usuario, product, cantidad]);
  }
  updateDetailOrder(id: number, cantidad: number): void {
    this.http.post(`${this.baseUrl}/updateDetailOrder.php`, [id, cantidad]);
  }
}
