import {Component} from '@angular/core';
import {OfferService} from "../../providers/offer.service";
import {IOffer} from "../../models/IOffer";

@Component({
  selector: 'offer-list',
  template: require('./offer.list.html')
})
export class OfferListComponent {
  offers: IOffer[];

  constructor(private offerService: OfferService) {
    this.offerService.getOffers().subscribe(offers => {
      this.offers = offers;
    });
  }
}
