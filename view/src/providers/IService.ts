import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { UUID } from 'angular2-uuid';
import {IModelBase} from "../models/IModelBase";

export class IService<T extends IModelBase> {
  apiUrl = 'http://localhost:4500/api';
  apiName: string;
  mappedItems: T[];
  mappedItem: T;

  constructor(public http: Http, apiName: string) {
    this.apiName = apiName;
  }

  getAll(): Observable<T[]> {
    return this.http.get(`${this.apiUrl}/${this.apiName}`)
      .map(res => {
        this.mappedItems = <T[]>res.json();

        this.mappedItems.map(item => {
          item;
        });

        return this.mappedItems;
      });
  }

  getOne(itemId: string): Observable<T> {
    return this.http.get(`${this.apiUrl}/${this.apiName}/${itemId}`)
      .map(res => {
        this.mappedItem = <T>res.json();

        return this.mappedItem;
      });
  }

  saveNew(item: T): Observable<T> {
    return this.http.post(`${this.apiUrl}/${this.apiName}`, JSON.stringify(item))
      .map(res => {
        this.mappedItem = <T>res.json();

        return this.mappedItem;
      });
  }

  save(item: T): Observable<T> {
    return this.http.put(`${this.apiUrl}/${this.apiName}/${item.ID}`, JSON.stringify(item))
      .map(res => {
        this.mappedItem = <T>res.json();

        return this.mappedItem;
      });
  }

  delete(item: T) {
    let url = `${this.apiUrl}/${this.apiName}/${item.ID}`;

    return this.http.delete(url)
      .catch(this.handleError);
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
