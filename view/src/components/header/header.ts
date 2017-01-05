import {Component} from '@angular/core';
import {UserService} from "../../providers/user.service";
import {ILogin} from "../../models/ILogin";

@Component({
  selector: 'oiheader',
  template: require('./header.html')
})
export class HeaderComponent {
  authenticatedUser: ILogin;

  constructor(public userService: UserService) {
    this.authenticatedUser = userService.getLoggedUser();
  }
}
