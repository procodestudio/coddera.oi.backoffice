import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, XHRBackend, Http} from '@angular/http';
import {routing, RootComponent} from './routes';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {Ng2Webstorage, LocalStorageService} from 'ng2-webstorage';

import {HeaderComponent} from "../components/header/header";
import {OfferService} from "../providers/offer.service";
import {OfferListComponent} from "../pages/offer/offer.list";
import { ModalModule } from 'angular2-modal';
import {OfferEditComponent} from "../pages/offer/offer.edit";
import {Autosize} from "../directives/autosize";
import {OfferValidator} from "../validators/offer.validator";
import {RequestOptions} from "@angular/http";
import {HttpInterceptor} from "./http-interceptor";
import {LoginComponent} from "../pages/login/login";
import {UserService} from "../providers/user.service";

@NgModule({
  imports: [
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    ModalModule.forRoot(),
    HttpModule,
    Ng2Webstorage,
    routing
  ],
  declarations: [
    RootComponent,
    LoginComponent,
    OfferListComponent,
    OfferEditComponent,
    HeaderComponent,
    Autosize
  ],
  bootstrap: [RootComponent],
  providers: [
    OfferService,
    UserService,
    OfferValidator,
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
