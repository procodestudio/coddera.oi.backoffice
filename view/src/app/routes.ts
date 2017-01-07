import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferListComponent} from "../pages/offer/offer.list";
import {OfferEditComponent} from "../pages/offer/offer.edit";
import {LoginComponent} from "../pages/login/login";
import {UserListComponent} from "../pages/user/user.list";
import {UserEditComponent} from "../pages/user/user.edit";

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
  { path: 'offer/:id', component: OfferEditComponent },
  { path: 'user', component: UserListComponent },
  { path: 'user/new', component: UserEditComponent },
  { path: 'user/:id', component: UserEditComponent }
];

export const routing = RouterModule.forRoot(routes);
