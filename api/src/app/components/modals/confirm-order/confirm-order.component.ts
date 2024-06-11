import { Component, Input } from '@angular/core';
import { NzmoduleModule } from '../../../nzmodule.module';
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
  @Input() isVisible = false;
  selectedOption!: string | null;
  domicilioChecked = false;
  restauranteChecked = false;
  
  constructor(private router: Router) { }

  
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


  handleOk(): void {
    this.router.navigate(['/valoraciones']);
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
