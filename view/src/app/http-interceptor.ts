import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {LocalStorageService} from 'ng2-webstorage';
import {IError} from "../models/IError";

@Injectable()
export class HttpInterceptor extends Http {
  _storage: LocalStorageService;

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private storage: LocalStorageService
  ) {
    super(backend, defaultOptions);
    this._storage = storage;
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest();
    return super.get(this.getFullUrl(url), this.customizeOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest();
    return super.delete(this.getFullUrl(url), this.customizeOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    if(url.indexOf('user/login') === -1){
      options = this.customizeOptions(options);
    }

    this.beforeRequest();
    return super.post(this.getFullUrl(url), body, options)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest();
    return super.put(this.getFullUrl(url), body, this.customizeOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  private getFullUrl(url: string): string {
    return url;
  }

  private customizeOptions(options?: RequestOptionsArgs) : RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }

    var userData = this._storage.retrieve('access');

    if(!userData){
      window.location.href = ('/#/login');
      return options;
    }

    options.headers.append('x-access-token', userData.session.token);
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  private beforeRequest(): void {
  }

  private afterRequest(): void {
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    if (error.status  == 401 || error.status == 400 || error.status == 403) {
      return Observable.throw(<IError> {
        redirect: true,
        message: "Sessão expirada, favor refaça o login"
      });
    } else {
      return Observable.throw(<IError> {
        redirect: false,
        message: "Houve um problema ao processar sua requisição."
      });
    }
  }

  private onError(error: any): void {
  }

  private onSuccess(res: Response): void {
  }

  private onFinally(): void {
    this.afterRequest();
  }
}
