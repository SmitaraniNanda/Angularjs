
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  message!: string;
  @Output() 
  eventEmit = new EventEmitter<string>();
  sendMessage() {
    this.eventEmit.emit("Hello from Child");
  }
}
