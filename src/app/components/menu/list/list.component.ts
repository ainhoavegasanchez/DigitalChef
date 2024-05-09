import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { OrderDetailService } from '../../../services/order_detail/order-detail.service';
import { TotalComponent } from './total/total.component';
import { OrderService } from '../../../services/order/order.service';
import { ModalsComponent } from '../../modals/modals.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CounterComponent, TotalComponent, ModalsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(
    private orderDetailService: OrderDetailService,
    private orderService: OrderService
  ) { }
  @Input()
  total!: number;
  @Output() updateTotal = new EventEmitter<number>();
  @Input()
  products: any[] = [];

  async updateCounter(counter: number, id: number) {
    console.log("actualizar", counter);
     this.orderDetailService.updateDetailOrder(counter, id).subscribe();
     this.updateOrder();
  }
  updateOrder() {
    this.orderService.updateOrder(this.orderService.OrderGet).subscribe(
      (order:any) =>{
        this.total= order.total;
      }
    );

  }

  isVisible = false;


  showModal(): void {
    if(this.isVisible==true){
      this.isVisible = false;
    }else{
      this.isVisible = true;
    }
    
  }
}
