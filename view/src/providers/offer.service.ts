import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {IOffer} from '../models/IOffer';
import {IService} from "./IService";

@Injectable()
export class OfferService extends IService<IOffer> {
  constructor(public http: Http) {
    super(http, 'offer');
  }
}
