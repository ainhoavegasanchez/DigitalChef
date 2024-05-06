import { Component, Input } from '@angular/core';
import { OrderDetailService } from '../../../../services/order_detail/order-detail.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  constructor(
    private orderDetailService: OrderDetailService
  ){}

  @Input()
  counter:number=1;
  increment():void{
    this.counter++;
    this.orderDetailService.updateDetailOrder(this.counter);
  }

  decrement(){
    this.counter--;
  }
}
