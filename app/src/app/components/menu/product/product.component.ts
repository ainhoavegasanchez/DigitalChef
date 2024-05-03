import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../interfaces/Product';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input()
  product!:Product;
  @Output() 
  addProducto = new EventEmitter<number>();

  addProduct(id:number):void{
    this.addProducto.emit(id);
  }
}
