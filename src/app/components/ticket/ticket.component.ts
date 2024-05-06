import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.sass'
})
export class TicketComponent implements OnInit {

  constructor(
    private orderDetailService: OrderDetailService,
    private productService: ProductService
  ) { }
  ngOnInit(): void {
    const orders = this.orderDetailService.getOrdersDetails().subscribe();
    console.log(orders);
    }

  }
