import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OfferService} from '../../providers/offer.service';
import {IOffer} from '../../models/IOffer';
import { Router, ActivatedRoute } from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'offer-edit',
  template: require('./offer.edit.html')
})
export class OfferEditComponent {
  offerForm: FormGroup;
  offerId: string;
  offer: IOffer;
  isLoading: boolean;
  private paramSubscribe: any;

  constructor(
    public toastr: ToastsManager,
    private offerService: OfferService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    this.paramSubscribe = this.route.params.subscribe(params => {
      this.offerId = params['id'];

      if(this.offerId){
        this.loadOffer();
      }else{
        this.offer = <IOffer>{};
      }
    });

    this.offerForm = formBuilder.group({
      ID: [''],
      NOME: ['',
        [
          <any>Validators.required,
          <any>Validators.minLength(5),
          <any>Validators.maxLength(20)
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
    this.isLoading = true;
    this.offerService.getOffer(this.offerId).subscribe(offer => {
      this.offer = offer;
      this.setFormValues(this.offer, this.offerForm);
      this.isLoading = false;
    });
  }

  saveOffer(){
    this.isLoading = true;

    if(this.offer.ID){
      this.offerService.saveOffer(this.offer).subscribe(offer => {
        this.toastr.success('Oferta criada com sucesso!');
        this.goBackToList();
      }, error => {
        this.isLoading = true;
        this.toastr.error('Houve um problema ao criar a oferta!');
        console.log(error);
      });

    }else{
      this.offerService.newOffer(this.offer).subscribe(offer => {
        this.toastr.success('Oferta salva com sucesso!');
        this.goBackToList();
      }, error => {
        this.isLoading = true;
        this.toastr.error('Houve um problema ao salvar a oferta!');
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
