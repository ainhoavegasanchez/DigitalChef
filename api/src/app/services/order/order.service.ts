import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/Order';
import { environment } from '../../../../enviroment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _order: any;
 baseUrl = environment.API_URL;

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
    console.log("insertando en el servicio", this.orderSet )
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
