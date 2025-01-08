import { Routes } from '@angular/router';
import { DefaultRouteComponent } from './default-route/default-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';

export const routes: Routes = [
  { path: 'index', component: DefaultRouteComponent },
  { path: 'second', component: SecondRouteComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];
