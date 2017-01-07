import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {IOffer} from '../models/IOffer';
import { UUID } from 'angular2-uuid';
import {IService} from "./IService";

@Injectable()
export class OfferService extends IService<IOffer> {
  constructor(public http: Http) {
    super(http, 'offer');
  }
}
