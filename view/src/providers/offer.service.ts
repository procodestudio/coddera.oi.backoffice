import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {IOffer} from "../models/IOffer";

@Injectable()
export class OfferService {
  apiUrl = 'http://localhost:4500/api';
  mappedOffers: IOffer[];

  constructor(public http: Http) { }

  getOffers(): Observable<IOffer[]> {
    return this.http.get(`${this.apiUrl}/offer`)
      .map(res => {
        this.mappedOffers = <IOffer[]>res.json();

        this.mappedOffers.map(offer =>{
          offer;
        });

        return this.mappedOffers;
      });
  }
}
