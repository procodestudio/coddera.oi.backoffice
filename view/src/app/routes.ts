import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferListComponent} from "../pages/offer/offer.list";
import {OfferEditComponent} from "../pages/offer/offer.edit";
import {LoginComponent} from "../pages/login/login";
import {UserListComponent} from "../pages/user/user.list";
import {UserEditComponent} from "../pages/user/user.edit";
import {CheckpointEditComponent} from "../pages/checkpoint/checkpoint.edit";
import {CheckpointListComponent} from "../pages/checkpoint/checkpoint.list";
import {PermissionComponent} from "../pages/permission-user/permission-user";
import {CanActivateRoutes} from "./can-activate-routes";

@Component({
  selector: 'app-root',
  template: require('./app.html')
})
export class RootComponent {}

export const routes: Routes = [
  { canActivate: [CanActivateRoutes], path: '', component: OfferListComponent },
  { canActivate: [CanActivateRoutes], path: 'login', component: LoginComponent },
  { canActivate: [CanActivateRoutes], path: 'offer', component: OfferListComponent },
  { canActivate: [CanActivateRoutes], path: 'offer/new', component: OfferEditComponent },
  { canActivate: [CanActivateRoutes], path: 'offer/:id', component: OfferEditComponent },
  { canActivate: [CanActivateRoutes], path: 'checkpoint', component: CheckpointListComponent },
  { canActivate: [CanActivateRoutes], path: 'checkpoint/new', component: CheckpointEditComponent },
  { canActivate: [CanActivateRoutes], path: 'checkpoint/:id', component: CheckpointEditComponent},
  { canActivate: [CanActivateRoutes], path: 'permission-user/:userId', component: PermissionComponent},
  { canActivate: [CanActivateRoutes], path: 'user', component: UserListComponent },
  { canActivate: [CanActivateRoutes], path: 'user/new', component: UserEditComponent },
  { canActivate: [CanActivateRoutes], path: 'user/:id', component: UserEditComponent }
];

export const routing = RouterModule.forRoot(routes);
