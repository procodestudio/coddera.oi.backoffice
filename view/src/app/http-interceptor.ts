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


@Injectable()
export class HttpInterceptor extends Http {

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions
  ) {
    super(backend, defaultOptions);
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
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  private beforeRequest(): void {
  }

  private afterRequest(): void {
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    if (error.status  == 401) {
      window.location.href = ('/login');
      return Observable.empty();
    } else {
      return Observable.throw(error);
    }
  }

  private onError(error: any): void {
  }

  private onSuccess(res: Response): void {
    console.log(res);
  }

  private onFinally(): void {
    this.afterRequest();
  }

}
