import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValorationService } from '../../../services/valoration/valoration.service';


@Component({
  selector: 'app-valoracion-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './valoracion-producto.component.html',
  styleUrl: './valoracion-producto.component.scss'
})
export class ValoracionProductoComponent {
  constructor(
    private valorationService:ValorationService
  ){}
@Input() producto!:any;

valor: number = 5;

updateRating() {
  console.log('Nuevo valor del rating:', this.valor);
  this.valorationService.insertValoration(this.valor, this.producto.id).subscribe();
}
}