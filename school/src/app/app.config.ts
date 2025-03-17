import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter ,Routes} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FetchComponent } from './components/fetch/fetch.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full'},
  { path: 'fetch', component: FetchComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'product', component: ProductComponent},
  { path: '**', redirectTo: 'header'}
]

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};


