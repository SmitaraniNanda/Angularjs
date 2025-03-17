import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SortpipePipe } from '../../sortpipe.pipe';


@Component({
  selector: 'app-header',
  imports: [CommonModule,SortpipePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  objects = [
    { name: 'Orange', color: 'green', price: 100 },
    { name: 'Banana', color: 'yellow', price: 50 },
    { name: 'Cherry', color: 'red', price: 200 },
    { name: 'Grapes', color: 'Black', price: 120 },
    
  ];
  parentMessage = "Hello from parent";
  childMessage = " ";
  
  receiveMessage(message : string){
    this.childMessage = message;
  }
}
