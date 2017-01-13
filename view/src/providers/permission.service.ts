import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";
import {IPermission} from "../models/IPermission";
import {LocalStorageService} from "ng2-webstorage/dist/app";
import {Constants} from "../app/constants";


@Injectable()
export class PermissionService {
  mappedItems: IPermission[];
  apiUrl = Constants.API_URL;

  constructor(public http: Http, private storage: LocalStorageService) {}

  isUserLogged(): boolean {
    return this.storage.retrieve('access');
  }

  getLoggedPermission(): string[] {
    return this.storage.retrieve('permissions');
  }

  getAll(): Observable<IPermission[]> {
    return this.http.get(`${this.apiUrl}/permission`)
      .map(res => {
        this.mappedItems = <IPermission[]>res.json();

        this.mappedItems.map(item => {
          item;
        });

        return this.mappedItems;
      });
  }

  addPermission(permission: IPermission, userId: number): Observable<any>{
    return this.http.post(`${this.apiUrl}/permissionUser`, JSON.stringify({
      CODIGO_PERMISSAO: permission.CODIGO,
      ID_USUARIO: userId
    }))
      .map(res => {
        return res.json();
      });
  }

  removePermission(permission: IPermission, userId: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/permissionUser/${permission.CODIGO}/${userId}`)
      .map(res => {
        return res.json();
      });
  }
}
