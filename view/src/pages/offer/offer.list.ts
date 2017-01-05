import {Component, ViewEncapsulation} from '@angular/core';
import {OfferService} from '../../providers/offer.service';
import {IOffer} from '../../models/IOffer';
import { Modal, JSNativeModalModule, providers } from 'angular2-modal/plugins/js-native';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BasePageComponent} from "../../components/base-page-component/base-page-component";
import {IError} from "../../models/IError";

@Component({
  selector: 'offer-list',
  template: require('./offer.list.html'),
  providers: [providers],
  encapsulation: ViewEncapsulation.None
})
export class OfferListComponent extends BasePageComponent{
  offers: IOffer[];

  constructor(
    private router: Router,
    private toastr: ToastsManager,
    private offerService: OfferService,
    public modal: Modal) {

    super(router, toastr);

    this.isLoading = true;
    this.offerService.getOffers().subscribe(offers => {
      this.offers = offers;
      this.isLoading = false;
    }, error => {
      this.handleError(<IError>error);
    });
  }

  deleteOffer(offer: IOffer, index: number) {
    const dialog = this.modal.confirm()
      .message('Deseja realmente excluir esta oferta?')
      .open();

    dialog.then((resultPromise) => {
      return resultPromise.result.then((result) => {
        this.isLoading = true;
        this.offerService.delete(offer).subscribe(response => {
          this.offers.splice(index, 1);
          this.toastr.success('Oferta excluida com sucesso!');
          this.isLoading = false;
        }, error => {
          this.handleError(<IError>error);
          console.log(error);
        });
      }, () => {})
    });
  }

  openOffer(offer: IOffer) {
    this.router.navigate(['/offer', offer.ID]);
  }
}
