import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OrderDetailService } from '../../../services/order_detail/order-detail.service';
import { ProductService } from '../../../services/product/product.service';
import { OrderDetail } from '../../../interfaces/OrderDetail';
import { OrderService } from '../../../services/order/order.service';
import { Order } from '../../../interfaces/Order';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit {

  constructor(
    private orderDetailService: OrderDetailService,
    private productService: ProductService,
    private orderService:OrderService
  ) { }
  details: OrderDetail[] = [];
  orders: any[] = [];
  product!: Product;

  ngOnInit(): void {
    this.getTotal();
    this.orderDetailService.getOrdersDetails().subscribe(
      (details: OrderDetail[]) => {
        this.details = details;
        this.details.forEach(
          detail => {
            this.productService.getProduct(detail.id_producto).subscribe(
              (prod: Product) => {
                this.orders.push({ id: detail.id, cantidad: detail.cantidad, product: prod, total: detail.cantidad * prod.precio })
              }
            );

          }
        )
      });

    console.log("en el ticket", this.orders);
  }

total: number = 0;
getTotal():void{
  this.orderService.updateOrder(this.orderService.get()).subscribe(
    (order: Order) => {
      this.total = order.total;
    });
}


}



