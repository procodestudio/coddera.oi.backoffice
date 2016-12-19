import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {OfferListComponent} from "../pages/offer/offer.list";

@Component({
  selector: 'app-root',
  template: require('./app.html')
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'offer',
    component: OfferListComponent
  }
];

export const routing = RouterModule.forRoot(routes);
