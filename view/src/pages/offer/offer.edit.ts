import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OfferService} from "../../providers/offer.service";
import {IOffer} from "../../models/IOffer";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'offer-edit',
  template: require('./offer.edit.html')
})
export class OfferEditComponent {
  offerForm: FormGroup;
  offerId: string;
  offer: IOffer;
  private paramSubscribe: any;

  constructor(
    private offerService: OfferService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.paramSubscribe = this.route.params.subscribe(params => {
      this.offerId = params['id'];

      if(this.offerId){
        this.loadOffer();
      }
    });

    this.offerForm = formBuilder.group({
      ID: [''],
      NOME: ['',
        [
          <any>Validators.required,
          <any>Validators.minLength(5)
        ]
      ],
      DESCRICAO: ['',
        [
          <any>Validators.required,
          <any>Validators.minLength(5)
        ]
      ],
      PRECO: [''],
      SCRIPT: ['',
        [
          <any>Validators.required,
          <any>Validators.minLength(5)
        ]
      ],
      ID_BENEFICIO: [''],
      ID_PROGRAMA: [''],
      EXIBIR: ['']
    });
  }

  loadOffer(){
    this.offerService.getOffer(this.offerId).subscribe(offer => {
      this.offer = offer;
      this.setFormValues(this.offer, this.offerForm);
    });
  }

  saveOffer(){
    this.offerService.saveOffer(this.offer).subscribe(offer => {
      console.log(offer);
    });
  }

  setFormValues(offer: IOffer , formGroup: FormGroup){
    formGroup.setValue(offer, { onlySelf: true });
  }

  private isNullOrUndefined(value: string){
    return (value != '' && value != undefined);
  }

}
