import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Output() counterUpdate = new EventEmitter<number>();

  @Input()
  counter!:number;


  increment():void{
    this.counter++;

    this.counterUpdate.emit(this.counter);
    
  }

  decrement(){
    this.counter--;

    this.counterUpdate.emit(this.counter);
  }

  
}
