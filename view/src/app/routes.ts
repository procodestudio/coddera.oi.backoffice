import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard';
import {OfferListComponent} from "../pages/offer/offer.list";
import {OfferEditComponent} from "../pages/offer/offer.edit";

@Component({
  selector: 'app-root',
  template: require('./app.html')
})
export class RootComponent {}

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'offer', component: OfferListComponent },
  { path: 'offer/:id', component: OfferEditComponent }
];

export const routing = RouterModule.forRoot(routes);
