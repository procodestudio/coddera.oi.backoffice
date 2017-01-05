import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {ILogin} from "../models/ILogin";
import {LocalStorageService} from 'ng2-webstorage';

@Injectable()
export class UserService {
  apiUrl = 'http://localhost:4500/api';
  authenticatedUser: ILogin;

  constructor(public http: Http, public storage: LocalStorageService) { }

  login(usuario: string, senha: string): Observable<ILogin> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}/user/login`, JSON.stringify({
      "USUARIO": usuario,
      "SENHA": senha,
    }), options)
      .map(res => {
        this.authenticatedUser = <ILogin>res.json();
        return this.authenticatedUser;
      });
  }

  getLoggedUser(): ILogin {
    var userData = this.storage.retrieve('access');
    if(!userData) return null;
    return <ILogin>userData;
  }

  handleError(error): any {
    console.error(error.json());
    let errorMessage: any;

    if(error.json()) {
      errorMessage = error.json().errors[0].message;
    }else {
      errorMessage = 'Erro desconhecido';
    }
    return Observable.throw(errorMessage);
  }
}
