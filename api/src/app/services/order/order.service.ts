import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/Order';
import { environment } from '../../../../environment';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _order!: Order;
  baseUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    const storedOrder = localStorage.getItem('currentOrder');
    if (storedOrder) {
      this._order = JSON.parse(storedOrder);
    }
  }

  public get(): Order {
    return this._order;
  }

  public set(order: Order):void {
    this._order = order;
    localStorage.setItem('currentOrder', JSON.stringify(order));
  }

  public insertOrder(): Observable<Order> {
    const user = this.userService.get();
    return this.http.post<Order>(`${this.baseUrl}/insertOrder.php`, JSON.stringify(user))
      .pipe(
        tap(order => {
          this.set(order);
        })
      );
  }

  public getOrders(): Observable<Order[]> {
    const id = this.userService.get()?.id;
    return this.http.get<Order[]>(`${this.baseUrl}/getOrder.php?id_usuario=${id}`);
  }

  public updateOrder(order: Order): Observable<Order> {
    const orderUpdate =  this.http.post<Order>(`${this.baseUrl}/updateOrder.php`, JSON.stringify(order));
    return orderUpdate;
  }

  public closedOrder(order:Order): Observable<Order> {
    const orderUpdated =  this.http.post<Order>(`${this.baseUrl}/terminatedOrder.php`, JSON.stringify(order));
    localStorage.removeItem('currentOrder');

    return orderUpdated;
  }

    

  public getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/getAllOrders.php`);
  }
}
