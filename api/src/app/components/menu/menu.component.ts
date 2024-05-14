import { Product } from './../../interfaces/Product';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { OrderService } from '../../services/order/order.service';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HttpClientModule, ProductComponent, ListComponent],
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
    // this.updateOrder();

  }
  total: number = 0;

  recuperarTodos(value?: number) {
    this.productService.getProducts(value).subscribe((result: any[]) => {
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
        this.orderDetailService.insertOrderDetail().subscribe(() => {
          console.log("Producto insertado");
          this.load();
          console.log("Leyendo la lista");
          
        });
      }
    );
   this.updateOrder();
   
  }


  load() {
    this.orderDetailService.getOrdersDetails().subscribe(
      details => {
        this.MenuList = [...details];
        console.log(this.MenuList);
      }
    );
    this.updateOrder();
   
    
}

updateOrder() {
  this.orderService.updateOrder(this.orderService.OrderGet).subscribe(
    (order:any) => {
       this.total = order.total;
    }    
    
  );
  
}
}
