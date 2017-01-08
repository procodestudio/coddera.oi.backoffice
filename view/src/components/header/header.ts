import {Component} from '@angular/core';
import {UserService} from "../../providers/user.service";
import {ILogin} from "../../models/ILogin";
import {LocalStorageService} from 'ng2-webstorage';
import {Router} from "@angular/router";

@Component({
  selector: 'oiheader',
  template: require('./header.html')
})
export class HeaderComponent {
  authenticatedUser: ILogin;

  constructor(
    public userService: UserService,
    public storage: LocalStorageService,
    public router: Router
  ) {
    this.authenticatedUser = this.userService.getLoggedUser();
  }

  ngOnInit() {
    this.storage.observe('access')
      .subscribe((value) => this.authenticatedUser = this.userService.getLoggedUser());
  }
}
