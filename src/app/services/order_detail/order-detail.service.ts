import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderService } from '../order/order.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {


  constructor(
    private http: HttpClient,
    private orderService: OrderService,
    private productService: ProductService
  ) { }
  baseUrl = "/api/php/order_detail";

  insertOrderDetail(count: number) {
    const order = this.orderService.OrderGet;
    const product = this.productService.productGet;
    console.log(order, product, count);
    return this.http.post(`${this.baseUrl}/insertOrderDetail.php`, { product, order, count });
  }


  getOrdersDetails() {
    const order = this.orderService.OrderGet;
    const id_pedido = order.id;
    const userReturn = this.http.get(`${this.baseUrl}/getOrderDetail.php?id_pedido=${id_pedido}`);
    return userReturn;
  };


  updateUser(id: number, pass: string): void {
    this.http.post(`${this.baseUrl}/updateDetailOrder.php`, [id, pass]);
  }
}
