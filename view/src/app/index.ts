import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {DashboardComponent} from '../pages/dashboard/dashboard';
import {HeaderComponent} from "../components/header/header";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    DashboardComponent,
    HeaderComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
