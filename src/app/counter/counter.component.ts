import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() name:string;

  @Input() operation:string;

  counter: number = 0;

  constructor() {}

  incrementByOne() {
    this.counter = this.counter + 1;
  }

  decrementByOne() {
    this.counter = this.counter - 1;
  }
}


