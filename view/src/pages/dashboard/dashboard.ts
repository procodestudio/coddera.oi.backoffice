import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./dashboard.html')
})
export class DashboardComponent {
  public hello: string;

  constructor() {
    this.hello = 'Oi Backoffice';
  }
}
