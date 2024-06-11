import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValorationService } from '../../../services/valoration/valoration.service';


@Component({
  selector: 'app-valoracion-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './valoracion-producto.component.html',
  styleUrl: './valoracion-producto.component.scss'
})
export class ValoracionProductoComponent implements OnInit {
  constructor(
    private valorationService:ValorationService
  ){}
  ngOnInit(): void {
   this.valor= 5;
  }
@Input() producto!:any;

valor: number = 0;

updateRating():void {
  this.valorationService.insertValoration(this.valor, this.producto.id).subscribe();
}
}
