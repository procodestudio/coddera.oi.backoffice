import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OfferService} from '../../providers/offer.service';
import {OfferValidator} from '../../validators/offer.validator';
import {IOffer} from '../../models/IOffer';
import { Router, ActivatedRoute } from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BasePageComponent} from "../../components/base-page-component/base-page-component";
import {IError} from "../../models/IError";


@Component({
  selector: 'offer-edit',
  template: require('./offer.edit.html')
})
export class OfferEditComponent extends BasePageComponent{
  offerForm: FormGroup;
  offerId: string;
  offer: IOffer;
  private paramSubscribe: any;

  constructor(
    public toastr: ToastsManager,
    private offerService: OfferService,
    private offerValidator: OfferValidator,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    super(router, toastr);

    this.paramSubscribe = this.route.params.subscribe(params => {
      this.offerId = params['id'];

      if(this.offerId){
        this.loadOffer();
      }else{
        this.offer = <IOffer>{};
      }
    });

    this.offerForm = offerValidator.get();
  }

  loadOffer(){
    this.isLoading = true;
    this.offerService.getOffer(this.offerId).subscribe(offer => {
      this.offer = offer;
      this.setFormValues(this.offer, this.offerForm);
      this.isLoading = false;
    }, error => {
      this.handleError(<IError>error);
      console.log(error);
    });
  }

  saveOffer(){
    this.isLoading = true;

    if(this.offer.ID){
      this.offerService.saveOffer(this.offer).subscribe(offer => {
        this.toastr.success('Oferta salva com sucesso!');
        this.goBackToList();
      }, error => {
        this.handleError(<IError>error);
        console.log(error);
      });

    }else{
      this.offerService.newOffer(this.offer).subscribe(offer => {
        this.toastr.success('Oferta criada com sucesso!');
        this.goBackToList();
      }, error => {
        this.handleError(<IError>error);
        console.log(error);
      });
    }
  }

  setFormValues(offer: IOffer , formGroup: FormGroup){
    formGroup.setValue(offer, { onlySelf: true });
  }

  goBackToList(){
    this.isLoading = false;
    this.router.navigate(['/offer']);
  }

  private isNullOrUndefined(value: string){
    return (value != '' && value != undefined);
  }

}
