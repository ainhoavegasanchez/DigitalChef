import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { OrderService } from '../../services/order/order.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/User';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilComponent implements OnInit {
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private orderDetailService: OrderDetailService
  ) { }

  mostrarLista: boolean = false;
  user!: User;
  listOrder: any[] = [];

  ngOnInit(): void {
    this.user = this.userService.UserGet;
    this.orderService.getOrders().subscribe(
      order => {
        this.listOrder = order;
      }
    );
    console.log(this.listOrder);
  }

  mostrarPedidos() {
    if (this.mostrarLista == true) {
      this.mostrarLista = false;
    } else {
      this.mostrarLista = true;
    }

  }
  listDetail: any[]=[];
  getOrdersDetailsId(id: number) {
    console.log("id_pedido:", id);
    this.orderDetailService.getOrdersDetailsId(id).subscribe(
      details => {
        console.log(details);
        this.listDetail = details;
        console.log(this.listDetail);
      }
    );
   
  }


}
