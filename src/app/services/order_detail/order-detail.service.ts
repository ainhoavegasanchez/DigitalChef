import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderService } from '../order/order.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private _orderDetail!: any;

  get orderDetailGet(): any {
    return this._orderDetail;
  }


  set orderDetailSet(orderDetail: any) {
    this._orderDetail = orderDetail;
  }

  constructor(
    private http: HttpClient,
    private orderService: OrderService,
    private productService: ProductService
  ) { }
  baseUrl = "https://vps-65482c69.vps.ovh.net/php/order_detail";

  insertOrderDetail() {
    const order = this.orderService.OrderGet;
    const product = this.productService.productGet;
    const orderDetail = this.http.post(`${this.baseUrl}/insertOrderDetail.php`, { product, order });
    this.orderDetailSet = orderDetail;
    return orderDetail;
  }


  getOrdersDetails() {
    const order = this.orderService.OrderGet;
    const id_pedido = order.id;
    const userReturn = this.http.get(`${this.baseUrl}/getOrderDetail.php?id_pedido=${id_pedido}`);
    return userReturn;
  };


  updateDetailOrder(count: number): void {
    const orderDetail = this.orderDetailGet;
    this.http.post(`${this.baseUrl}/updateDetailOrder.php`, JSON.stringify(count, orderDetail));
  }
}
