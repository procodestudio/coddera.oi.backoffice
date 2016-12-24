import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {routing, RootComponent} from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import {HeaderComponent} from "../components/header/header";
import {OfferService} from "../providers/offer.service";
import {OfferListComponent} from "../pages/offer/offer.list";
import { ModalModule } from 'angular2-modal';
import {OfferEditComponent} from "../pages/offer/offer.edit";
import {Autosize} from "../directives/autosize";
import {OfferValidator} from "../validators/offer.validator";


@NgModule({
  imports: [
    ToastModule,
    ReactiveFormsModule,
    BrowserModule,
    ModalModule.forRoot(),
    HttpModule,
    routing
  ],
  declarations: [
    RootComponent,
    OfferListComponent,
    OfferEditComponent,
    HeaderComponent,
    Autosize
  ],
  bootstrap: [RootComponent],
  providers: [
    OfferService,
    OfferValidator
  ]
})
export class AppModule {}
