import {Component} from '@angular/core';
import {UserService} from '../../providers/user.service';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {LocalStorageService} from 'ng2-webstorage';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'login',
  template: require('./login.html')
})
export class LoginComponent {
  isLoading: boolean = false;
  user: string;
  password: string;

  constructor(
    private router: Router,
    private toastr: ToastsManager,
    private userService: UserService,
    private storage: LocalStorageService
  ) {
  }

  doLogin(user: string, password: string) {
      this.isLoading = true;
      this.userService.login(user, Md5.hashStr(password).toString()).subscribe(response => {
        this.storage.store('access', response);
        this.isLoading = false;
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
