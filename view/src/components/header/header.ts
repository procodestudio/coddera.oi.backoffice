import {Component} from '@angular/core';
import {UserService} from "../../providers/user.service";
import {ILogin} from "../../models/ILogin";
import {LocalStorageService} from 'ng2-webstorage';

@Component({
  selector: 'oiheader',
  template: require('./header.html')
})
export class HeaderComponent {
  authenticatedUser: ILogin;

  constructor(
    public userService: UserService,
    public storage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.storage.observe('access')
      .subscribe((value) => this.authenticatedUser = this.userService.getLoggedUser());
  }
}
