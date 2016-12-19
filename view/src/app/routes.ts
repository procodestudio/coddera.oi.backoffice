import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../pages/dashboard/dashboard';

@Component({
  selector: 'app-root',
  template: require('./app.html')
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const routing = RouterModule.forRoot(routes);
