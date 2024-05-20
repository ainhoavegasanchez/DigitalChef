import { Component, Input } from '@angular/core';
import { NzmoduleModule } from '../../nzmodule.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [NzmoduleModule, CommonModule, FormsModule],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.scss'
})
export class ConfirmOrderComponent {
constructor(private router:Router){}
  selectedOption!: string| null;
  domicilioChecked = false;
  restauranteChecked = false;

  changeValor(option: string): void {
    if (option === 'domicilio') {
      this.domicilioChecked = true;
      this.restauranteChecked = false;
    } else {
      this.restauranteChecked = true;
      this.domicilioChecked = false;
    }
    this.selectedOption = option;
  }

  @Input() isVisible = false;

 handleOk(): void {
  console.log('Button ok clicked!');
  this.router.navigate(['/valoraciones']);
  this.isVisible = false;
}

handleCancel(): void {
  console.log('Button cancel clicked!');
  this.isVisible = false;
}

}
