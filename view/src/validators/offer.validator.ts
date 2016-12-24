import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class OfferValidator {
  validator: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.validator = formBuilder.group({
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

  public get() : FormGroup {
    return this.validator;
  }
}
