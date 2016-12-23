import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {IOffer} from '../models/IOffer';
import { UUID } from 'angular2-uuid';

@Injectable()
export class OfferService {
  apiUrl = 'http://localhost:4500/api';
  mappedOffers: IOffer[];
  mappedOffer: IOffer;

  constructor(public http: Http) { }

  getOffers(): Observable<IOffer[]> {
    return this.http.get(`${this.apiUrl}/offer`)
      .map(res => {
        this.mappedOffers = <IOffer[]>res.json();

        this.mappedOffers.map(offer => {
          offer;
        });

        return this.mappedOffers;
      });
  }

  getOffer(offerId: string): Observable<IOffer> {
    return this.http.get(`${this.apiUrl}/offer/${offerId}`)
      .map(res => {
        this.mappedOffer = <IOffer>res.json();

        return this.mappedOffer;
      });
  }

  newOffer(offer: IOffer): Observable<IOffer> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    offer.ID = Math.floor(this.crc32(UUID.UUID())/1000000);
    offer.EXIBIR = null;

    return this.http.post(`${this.apiUrl}/offer`, JSON.stringify(offer), options)
      .map(res => {
        this.mappedOffer = <IOffer>res.json();

        return this.mappedOffer;
      });
  }

  saveOffer(offer: IOffer): Observable<IOffer> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.apiUrl}/offer/${offer.ID}`, JSON.stringify(offer), options)
      .map(res => {
        this.mappedOffer = <IOffer>res.json();

        return this.mappedOffer;
      });
  }

  delete(offer: IOffer) {
    let url = `${this.apiUrl}/offer/${offer.ID}`;

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

  makeCRCTable(): any {
    let c;
    let crcTable = [];
    for(var n =0; n < 256; n++){
      c = n;
      for(var k =0; k < 8; k++){
        c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
      }
      crcTable[n] = c;
    }
    return crcTable;
  }

  crc32(str: string): number {
    var crcTable = this.makeCRCTable();
    var crc = 0 ^ (-1);

    for (var i = 0; i < str.length; i++ ) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
    }

    return (crc ^ (-1)) >>> 0;
  };

}
