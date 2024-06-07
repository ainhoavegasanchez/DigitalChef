import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';
import { ValoracionProductoComponent } from './valoracion-producto/valoracion-producto.component';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../interfaces/Product';
import { Router, RouterModule } from '@angular/router';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [CommonModule, ValoracionProductoComponent, RouterModule],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.scss'
})
export class ValoracionesComponent implements OnInit{
  list:any[]=[]
  constructor(
    private orderDetailService:OrderDetailService,
    private productService:ProductService,
    private orderService:OrderService,
    private router: Router,
  ){}

  
  ngOnInit(): void {
    this.orderDetailService.getOrdersDetails().subscribe(
      details => {
        const products = details.map(details=>details.id_producto);
        products.forEach(prod=>{
          this.productService.getProduct(prod).subscribe(
            (product:Product)=>{
              this.list.push(product);
            }
          )
        })
        console.log(this.list);
      }
    );
  }

  //TODO:
closeOrder():void{
  const order= this.orderService.OrderGet
  console.log(order);
  localStorage.removeItem('email');
  this.orderService.closedOrder(order).subscribe();
  this.router.navigate(['/portada']);
}

}
