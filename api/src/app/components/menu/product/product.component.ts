import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { ValorationService } from '../../../services/valoration/valoration.service';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NzRateModule, CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
constructor(
  private valorationService:ValorationService
){}
  @Input()
  product!:Product;
  @Output() 
  addProducto = new EventEmitter<number>();
  valor:number=5;

  ngOnInit(): void {
    this.valorationService.getValorationProduct(this.product.id).subscribe(
      (valor:any)=>{
        this.valor = valor ? valor.media : 5;
      }
    );
  }

  
  addProduct(id:number):void{
    this.addProducto.emit(id);
  }
}
