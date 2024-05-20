import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { OrderDetailService } from '../../../services/order_detail/order-detail.service';
import { TotalComponent } from './total/total.component';
import { OrderService } from '../../../services/order/order.service';
import { ModalsComponent } from '../../modals/modals.component';
import { ProductService } from '../../../services/product/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CounterComponent, TotalComponent, ModalsComponent, FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(
    private orderDetailService: OrderDetailService,
    private orderService: OrderService,
    private productService: ProductService
  ) { }

  @Input()
  total!: number;
  @Output() deleteDetail = new EventEmitter<number>();
  @Input()
  products: any[] = [];

  updateCounter(counter: number, id: number) {
    if (counter == 0) {
      this.delete(id);
      console.log("se ha borrado");
    } else {
      this.orderDetailService.updateDetailOrder(counter, id).subscribe();
      console.log("actualizar", counter);
    }
    this.updateOrder();
  }

  updateOrder() {
    this.orderService.updateOrder(this.orderService.OrderGet).subscribe(
      (order: any) => {
        this.total = order.total;
      }
    );
  }

  isVisible = false;


  showModal(): void {
    if (this.isVisible == true) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

  delete(id: number) {
    this.deleteDetail.emit(id);
  }

}
