import {Component} from '@angular/core';
import {UserService} from '../../providers/user.service';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {ILogin} from "../../models/ILogin";

@Component({
  selector: 'login',
  template: require('./login.html')
})
export class LoginComponent {
  isLoading: boolean = false;
  user: string;
  password: string;
  userData: ILogin;

  constructor(
    private router: Router,
    private toastr: ToastsManager,
    private userService: UserService,
    private storage: LocalStorageService
  ) {
    userService.logout();
  }

  doLogin(user: string, password: string) {
      this.isLoading = true;
      this.userService.login(user, Md5.hashStr(password).toString())
        .flatMap((value) => {
          this.userData = value;
          this.storage.store('access', this.userData);
          return this.userService.userPermissions(value.ID)
        })
        .subscribe(permissions => {
          this.isLoading = false;
          this.storage.store('permissions', permissions);
          this.router.navigate(['offer']);
        }, error => {
          this.isLoading = false;
          this.toastr.error('Usuário ou senha incorreto(s)!');
          console.log(error);
        });
  }

  private isNullOrUndefined(value: string){
    return (value != '' && value != undefined);
  }
}
