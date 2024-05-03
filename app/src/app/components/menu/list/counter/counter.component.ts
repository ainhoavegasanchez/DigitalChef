import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input()
  counter:number=1;
  increment():void{
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
