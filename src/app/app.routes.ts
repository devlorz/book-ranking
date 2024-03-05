import { Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { PageNotFoundComponent } from './components/404/404.component';

export const routes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: '**', component: PageNotFoundComponent },
];
