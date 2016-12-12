import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {DashboardComponent} from '../pages/dashboard/dashboard';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    DashboardComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
