import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { OrderService } from '../../services/order/order.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent implements OnInit {

  constructor(
    private userService: UserService,
    private orderService: OrderService
  ) { }

  mostrarLista: boolean = false;
  user!: User;
  listOrder: any[] = [];
  ngOnInit(): void {
    const list: any[] = [];
    this.user = this.userService.UserGet;
    this.orderService.getOrders().subscribe(
      order => {
        list.push(order)
      }
    );
    this.listOrder = list[0];
  }

  mostrarPedidos() {
    this.mostrarLista = true;
    console.log(this.listOrder);
  }

}
