import { Routes } from '@angular/router';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TapPageComponent } from './pages/tap-page/tap-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'map',
    component: MapPageComponent,
  },
  {
    path: 'tap',
    component: TapPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
