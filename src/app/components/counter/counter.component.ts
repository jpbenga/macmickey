import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  quantity!: number

  @Output()
  quantityChange = new EventEmitter<number>

  incrementQuantity(){
    this.quantity ++
  }

  decrementQuantity(){
    if(this.quantity > 1){
      this.quantity --
    }
  }

}
