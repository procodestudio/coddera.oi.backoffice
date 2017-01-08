import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class UserValidator {
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
      USUARIO: ['',
        [
          <any>Validators.required,
          <any>Validators.minLength(5),
          <any>Validators.maxLength(20)
        ]
      ],
      SENHA: ['',
        [
          <any>Validators.required,
          <any>Validators.minLength(5),
          <any>Validators.maxLength(20)
        ]
      ]
    });
  }

  public get() : FormGroup {
    return this.validator;
  }
}
