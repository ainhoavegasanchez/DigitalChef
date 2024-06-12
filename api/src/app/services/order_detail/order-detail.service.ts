import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderService } from '../order/order.service';
import { ProductService } from '../product/product.service';
import { OrderDetail } from '../../interfaces/OrderDetail';
import { environment } from '../../../../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private _orderDetail!: OrderDetail;

  public get(): OrderDetail {
    return this._orderDetail;
  }
  public set(orderDetail: OrderDetail) {
    this._orderDetail = orderDetail;
  }

  constructor(
    private http: HttpClient,
    private orderService: OrderService,
    private productService: ProductService
  ) { }

  baseUrl = environment.API_URL;

  public insertOrderDetail() :Observable<OrderDetail>{
    const order = this.orderService.get();
    const product = this.productService.get();
    
    const orderDetail = this.http.post<OrderDetail>(`${this.baseUrl}/insertOrderDetail.php`, { product, order })

    return orderDetail;
  }


  public getOrdersDetails():Observable<OrderDetail[]> {
    const order = this.orderService.get();
    const id_pedido = order.id;
    const userReturn = this.http.get<OrderDetail[]>(`${this.baseUrl}/getOrderDetail.php?id_pedido=${id_pedido}`);

    return userReturn;
  };

  public getOrdersDetailsById(id_pedido:number):Observable<OrderDetail[]> {
    const userReturn = this.http.get<OrderDetail[]>(`${this.baseUrl}/getOrderDetail.php?id_pedido=${id_pedido}`);
    return userReturn;
  };

  public updateDetailOrder(count: number, id: number) :Observable<OrderDetail>{
    const detail = this.http.post<OrderDetail>(`${this.baseUrl}/updateDetailOrder.php`, { count, id });
    return detail;
  }

  public deleteDetailOrder(id: number):Observable<OrderDetail> {
    return this.http.post<OrderDetail>(`${this.baseUrl}/deleteDetailOrder.php`, { id });
  };
}
