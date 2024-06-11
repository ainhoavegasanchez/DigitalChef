import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderDetailService } from '../../../services/order_detail/order-detail.service';
import { OrderService } from '../../../services/order/order.service';;
import { Product } from '../../../interfaces/Product';
import { Order } from '../../../interfaces/Order';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(
    private orderDetailService: OrderDetailService,
    private orderService: OrderService,
  ) { }

  @Input()  total!: number;
  @Output() deleteDetail = new EventEmitter<number>();
  @Input() products: any[] = [];

  updateCounter(counter: number, id: number) :void{
    if (counter == 0) {
      this.delete(id);
      console.log("se ha borrado");
    } else {
      this.orderDetailService.updateDetailOrder(counter, id).subscribe(
        () => {
          this.updateOrder();
        }
      );
      console.log("actualizar", counter);
    }

  }

  updateOrder():void {
    this.orderService.updateOrder(this.orderService.get()).subscribe(
      (order: Order) => {
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
