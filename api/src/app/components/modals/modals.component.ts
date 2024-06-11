import { Component, Input } from '@angular/core';
import { NzmoduleModule } from '../../nzmodule.module';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { Router } from '@angular/router';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [NzmoduleModule, CommonModule, TicketComponent, ConfirmOrderComponent],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.scss'
})
export class ModalsComponent {
  constructor(private router: Router) { }
  @Input() isVisible = false;
  visible!: boolean;
  
  handleOk(): void {
    console.log('Button ok clicked!');
    this.visible = true;
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


}
