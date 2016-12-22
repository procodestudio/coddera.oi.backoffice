import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {routing, RootComponent} from './routes';
import { ReactiveFormsModule } from '@angular/forms';

import {DashboardComponent} from '../pages/dashboard/dashboard';
import {HeaderComponent} from "../components/header/header";
import {OfferService} from "../providers/offer.service";
import {OfferListComponent} from "../pages/offer/offer.list";
import { ModalModule } from 'angular2-modal';
import {OfferEditComponent} from "../pages/offer/offer.edit";


@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    ModalModule.forRoot(),
    HttpModule,
    routing
  ],
  declarations: [
    RootComponent,
    DashboardComponent,
    OfferListComponent,
    OfferEditComponent,
    HeaderComponent
  ],
  bootstrap: [RootComponent],
  providers: [OfferService]
})
export class AppModule {}
