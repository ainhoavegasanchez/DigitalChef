import { Component, Input } from '@angular/core';
import { OrderService } from '../../../../services/order/order.service';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss'
})
export class TotalComponent {
  constructor(
    private orderService: OrderService
  ) { }
  
  @Input()
  total!: number;
}
