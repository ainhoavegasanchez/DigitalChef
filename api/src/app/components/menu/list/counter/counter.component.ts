import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderDetailService } from '../../../../services/order_detail/order-detail.service';
import { OrderService } from '../../../../services/order/order.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  constructor(
    private orderDetailService: OrderDetailService,
    private orderService: OrderService
  ){}

  @Output() counterUpdate = new EventEmitter<number>();

  @Input()
  counter!:number;


  increment():void{
    this.counter++;
    console.log("incremento", this.counter);
    this.counterUpdate.emit(this.counter);
    
  }

  decrement(){
    this.counter--;
    console.log("decremento", this.counter);
    this.counterUpdate.emit(this.counter);
  }

  
}
