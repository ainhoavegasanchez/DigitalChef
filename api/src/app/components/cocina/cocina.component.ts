import { Component, OnInit } from '@angular/core';
import { NzmoduleModule } from '../../nzmodule.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../interfaces/Order';
import { OrderService } from '../../services/order/order.service';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';
import { OrderDetail } from '../../interfaces/OrderDetail';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [NzmoduleModule, CommonModule, FormsModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.scss'
})
export class CocinaComponent implements OnInit {
  listOfOrder: any[] = [];

  constructor(
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        const ordersTerminated = orders.filter(order => order.terminado == true && order.total != 0);
        ordersTerminated.forEach(order => {
          this.orderDetailService.getOrdersDetailsById(order.id).subscribe(
            (orderDetail: OrderDetail[]) => {
              const details = orderDetail;
              this.listOfOrder.push({ order: order, details: details })

            }
          )
        }); console.log(this.listOfOrder);
      })
  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }

}
