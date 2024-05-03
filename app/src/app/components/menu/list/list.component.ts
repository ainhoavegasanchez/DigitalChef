import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Product } from '../../../interfaces/Product';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CounterComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input()
  products:Product[]=[];
}
