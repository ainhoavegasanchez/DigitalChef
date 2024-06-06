import { Product } from './../../interfaces/Product';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { OrderService } from '../../services/order/order.service';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HttpClientModule, ProductComponent, ListComponent, NzIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private orderDetailService: OrderDetailService,
    private orderService: OrderService
  ) { }


  productList: Product[] = [];
  ngOnInit() {
    this.recuperarTodos();
    this.load();

  }
  total: number = 0;

  recuperarTodos(value?: number) {
    this.productService.getProducts(value).subscribe((result: Product[]) => {
      this.productList = result.map(item => ({
        id: item.id,
        nombre: item.nombre,
        descripcion: item.descripcion,
        foto: item.foto,
        id_catego: item.id_catego,
        precio: item.precio
      }));
    });
  }

  MenuList: any[] = [];
  addProductList(id: number) {
    this.productService.getProduct(id).subscribe(
      async (product: Product) => {
        this.productService.productSet = product;
        if (!this.MenuList.some(item => item.product.id === product.id)) {
          this.orderDetailService.insertOrderDetail().subscribe(() => {
            this.updateOrder();
            this.load();
          });
        }
      } 
    );
   
  }


  load() {
    this.MenuList = [];
    this.orderDetailService.getOrdersDetails().subscribe(
      details => {
        this.updateOrder();
        details.forEach(detail => {
          const product = this.productService.getProduct(detail.id_producto).subscribe(
            (product: Product) => {
              if (!this.MenuList.some(item => item.product.id === product.id)) {
                this.MenuList.push({ detail: detail, product: product })
              }
            }
          );

          console.log(this.MenuList);
        });
      });


  }

  updateOrder() {
    this.orderService.updateOrder(this.orderService.OrderGet).subscribe(
      (order: any) => {
        this.total = order.total;
      });
  }

  delete(id: number): void {
    this.orderDetailService.deleteDetailOrder(id).subscribe(() => {
      this.load();
    })

  }
}
