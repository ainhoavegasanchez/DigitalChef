import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../../services/order_detail/order-detail.service';
import { ValoracionProductoComponent } from './valoracion-producto/valoracion-producto.component';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [CommonModule, ValoracionProductoComponent],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.scss'
})
export class ValoracionesComponent implements OnInit{
  list:any[]=[]
  constructor(
    private orderDetailService:OrderDetailService,
    private productService:ProductService
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


}
