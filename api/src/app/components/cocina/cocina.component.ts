import { Component, OnInit } from '@angular/core';
import { NzmoduleModule } from '../../nzmodule.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../interfaces/Order';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [NzmoduleModule, CommonModule, FormsModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent implements OnInit {
  listOfOrder!:Order[];
  
  constructor(
    private orderService:OrderService
  ){}
  
  ngOnInit(): void {
   this.orderService.getAllOrders().subscribe(
    (orders:Order[])=>{
      this.listOfOrder = orders.filter(order => order.terminado === true);
    }
   )
  }

}
