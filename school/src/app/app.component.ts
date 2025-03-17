import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FetchComponent,ProductComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular1';
  task = 'Smita';
}