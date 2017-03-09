import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, XHRBackend, Http} from '@angular/http';
import {routing, RootComponent} from './routes';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ToastModule, ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Ng2Webstorage, LocalStorageService} from 'ng2-webstorage';

import {HeaderComponent} from "../components/header/header";
import {OfferService} from "../providers/offer.service";
import {OfferListComponent} from "../pages/offer/offer.list";
import { ModalModule } from 'angular2-modal';
import {OfferEditComponent} from "../pages/offer/offer.edit";
import {OfferValidator} from "../validators/offer.validator";
import {RequestOptions} from "@angular/http";
import {HttpInterceptor} from "./http-interceptor";
import {LoginComponent} from "../pages/login/login";
import {UserService} from "../providers/user.service";
import {UserEditComponent} from "../pages/user/user.edit";
import {UserListComponent} from "../pages/user/user.list";
import {UserValidator} from "../validators/user.validator";
import {CheckpointValidator} from "../validators/checkpoint.validator";
import {CheckpointListComponent} from "../pages/checkpoint/checkpoint.list";
import {CheckpointEditComponent} from "../pages/checkpoint/checkpoint.edit";
import {CheckpointService} from "../providers/checkpoint.service";
import {PermissionComponent} from "../pages/permission-user/permission-user";
import {PermissionService} from "../providers/permission.service";
import {CanActivateRoutes} from "./can-activate-routes";
import {WelcomeComponent} from "../pages/welcome/welcome";

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    ModalModule.forRoot(),
    ToastModule.forRoot(),
    HttpModule,
    Ng2Webstorage,
    routing
  ],
  declarations: [
    RootComponent,
    LoginComponent,
    WelcomeComponent,
    OfferListComponent,
    OfferEditComponent,
    UserListComponent,
    UserEditComponent,
    PermissionComponent,
    CheckpointListComponent,
    CheckpointEditComponent,
    HeaderComponent
  ],
  bootstrap: [RootComponent],
  providers: [
    CanActivateRoutes,
    PermissionService,
    OfferService,
    UserService,
    UserValidator,
    CheckpointService,
    CheckpointValidator,
    OfferValidator,
    ToastsManager,
    {
      provide: Http,
      useFactory:
        (backend: XHRBackend, defaultOptions: RequestOptions, storage: LocalStorageService) => {
          return new HttpInterceptor(backend, defaultOptions, storage);
        },
      deps: [ XHRBackend, RequestOptions, LocalStorageService ]
    }
  ]
})
export class AppModule {}
