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
import { Order } from '../../interfaces/Order';
import { Valoration } from '../../interfaces/Valoration';


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
    this.user = this.userService.get();
    this.valorationService.getValorations().subscribe(
      (valorations: Valoration[]) => {
        valorations.forEach(
          (valoration: Valoration) => {
            this.productService.getProduct(valoration.id_producto).subscribe(
              (product: Product) => {
                console.log(valoration)
                this.listOrder.push({ valor: Number(valoration.valor), product: product })
              }
            )
          }
        )

      }
    )
  }


  // listDetail: any[] = [];
  // getOrdersDetailsId() {
  //   this.orderDetailService.getOrdersDetails().subscribe(
  //     details => {
  //       this.listDetail = details;
  //     }
  //   );

  // }


  update = {
    id: 0,
    email: this.userService.get().email,
    name: this.userService.get().nombre,
  }

  userUpdate: boolean = false;
  updateUser():void {
    this.update.id = this.userService.get().id;
    this.userService.updateUser(this.update).subscribe(
      (result: User) => {
        if (result) {
          this.userUpdate = true;
        }
      }
    );
  }

}
