import {Component, ViewEncapsulation} from '@angular/core';
import {OfferService} from "../../providers/offer.service";
import {IOffer} from "../../models/IOffer";
import { Modal, JSNativeModalModule, providers } from 'angular2-modal/plugins/js-native';
import {Router} from "@angular/router";

@Component({
  selector: 'offer-list',
  template: require('./offer.list.html'),
  providers: [providers],
  encapsulation: ViewEncapsulation.None
})
export class OfferListComponent {
  offers: IOffer[];

  constructor(
    private router: Router,
    private offerService: OfferService,
    public modal: Modal) {

    this.offerService.getOffers().subscribe(offers => {
      this.offers = offers;
    });
  }

  deleteOffer(offer: IOffer, index: number) {
    const dialog = this.modal.confirm()
      .message("Deseja realmente excluir esta oferta?")
      .open();

    dialog.then((resultPromise) => {
      return resultPromise.result.then((result) => {
        this.offerService.delete(offer).subscribe(response => {
          this.offers.splice(index, 1);
        });
      }, () => {})
    });
  }

  openOffer(offer: IOffer) {
    this.router.navigate(['/offer', offer.ID]);
  }

}
