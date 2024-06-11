import { Product } from './../../interfaces/Product';
import {  Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { OrderService } from '../../services/order/order.service';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';
import { Order } from '../../interfaces/Order';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
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
      (product: Product) => {

        this.productService.set(product);

        if (!this.MenuList.some(item => item.product.id === product.id)) {

          this.orderDetailService.insertOrderDetail().subscribe((detail) => {

            this.orderDetailService.set(detail);
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

          this.productService.getProduct(detail.id_producto).subscribe(

            (product: Product) => {
              if (!this.MenuList.some(item => item.product.id === product.id)) {
                this.MenuList.push({ detail: detail, product: product })
              }
            }
          );
        });
      });


  }

  updateOrder() :void{
    this.orderService.updateOrder(this.orderService.get()).subscribe(
      (order: Order) => {
        this.total = order.total;
      });
  }

  delete(id: number): void {
    this.orderDetailService.deleteDetailOrder(id).subscribe(() => {
      this.load();
    })

  }
}
