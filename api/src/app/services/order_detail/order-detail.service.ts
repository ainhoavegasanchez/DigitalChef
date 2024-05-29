import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderService } from '../order/order.service';
import { ProductService } from '../product/product.service';
import { OrderDetail } from '../../interfaces/OrderDetail';
import { environment } from '../../../../enviroment';

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

  baseUrl = environment.API_URL;
  
  insertOrderDetail() {
    const order = this.orderService.OrderGet;
    const product = this.productService.productGet;
    const orderDetail = this.http.post(`${this.baseUrl}/insertOrderDetail.php`, { product, order });
    this.orderDetailSet = orderDetail;
   
    return orderDetail;
  }


  getOrdersDetails() {
    const order = this.orderService.OrderGet;
    const id_pedido =parseInt(order.id);
    console.log("id del pedido", order);
    const userReturn = this.http.get<OrderDetail[]>(`${this.baseUrl}/getOrderDetail.php?id_pedido=${id_pedido}`);
    return userReturn;
  };

  getOrdersDetailsId(id_pedido:number) {
    const userReturn = this.http.get<OrderDetail[]>(`${this.baseUrl}/getOrderDetail.php?id_pedido=${id_pedido}`);
    console.log(userReturn);
    return userReturn;
  };



  updateDetailOrder(count: number, id: number) {
    const detail = this.http.post(`${this.baseUrl}/updateDetailOrder.php`,{count, id});
    return detail;
  }

  deleteDetailOrder(id: number) {
  return  this.http.post(`${this.baseUrl}/deleteDetailOrder.php`,{id});
  };
}
