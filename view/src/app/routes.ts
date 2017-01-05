import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferListComponent} from "../pages/offer/offer.list";
import {OfferEditComponent} from "../pages/offer/offer.edit";
import {LoginComponent} from "../pages/login/login";

@Component({
  selector: 'app-root',
  template: require('./app.html')
})
export class RootComponent {}

export const routes: Routes = [
  { path: '', component: OfferListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'offer', component: OfferListComponent },
  { path: 'offer/new', component: OfferEditComponent },
  { path: 'offer/:id', component: OfferEditComponent }
];

export const routing = RouterModule.forRoot(routes);
