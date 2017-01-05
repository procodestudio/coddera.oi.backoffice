import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {IOffer} from '../models/IOffer';
import { UUID } from 'angular2-uuid';
import {ILogin} from "../models/ILogin";

@Injectable()
export class UserService {
  apiUrl = 'http://localhost:4500/api';
  authenticatedUser: ILogin;

  constructor(public http: Http) { }

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
