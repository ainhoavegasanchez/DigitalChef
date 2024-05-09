import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { ValorationService } from '../../../services/valoration/valoration.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
constructor(
  private valorationService:ValorationService
){}
  ngOnInit(): void {
    this.valorationService.getValorationProduct(this.product.id).subscribe(
      (valor:any)=>{
        this.valor=valor.media;
      }
    );
  }
  @Input()
  product!:Product;
  @Output() 
  addProducto = new EventEmitter<number>();
  valor:number=0;
  
  addProduct(id:number):void{
    this.addProducto.emit(id);
  }
}
