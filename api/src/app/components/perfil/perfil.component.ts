import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/User';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';
import { ValorationService } from '../../services/valoration/valoration.service';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../interfaces/Product';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, NzRateModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilComponent implements OnInit {

  constructor(
    private userService: UserService,
    private valorationService: ValorationService,
    private orderDetailService: OrderDetailService,
    private productService: ProductService
  ) { }

  mostrarLista: boolean = false;
  user!: User;
  listOrder: any[] = [];

  ngOnInit(): void {
    this.user = this.userService.UserGet;
    this.valorationService.getValorations().subscribe(
      (valorations: any) => {
        valorations.forEach(
          (valoration: any) => {
            this.productService.getProduct(valoration.id_producto).subscribe(
              (product: Product) => {
                this.listOrder.push({ valor: valoration.valor, product: product })
              }
            )
          }
        )

      }
    )
    console.log(this.listOrder);
  }


  listDetail: any[] = [];
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


  update = {
    id: 0,
    email: this.userService.UserGet.email,
    name: this.userService.UserGet.nombre,
  }


  userUpdate: boolean = false;
  updateUser() {
    this.update.id = this.userService.UserGet.id;
    this.userService.updateUser(this.update).subscribe(
      (result: any) => {
        if (result) {
          this.userUpdate = true;
        }
      }
    );
  }

}
