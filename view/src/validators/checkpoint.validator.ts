import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class CheckpointValidator {
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
      STATUS: ['',
        [
          <any>Validators.required,
          <any>Validators.minLength(5),
          <any>Validators.maxLength(60)
        ]
      ],
      TIME_OUT: ['',
        [
          <any>Validators.required,
          <any>Validators.pattern(`^[0-9]{1,10}$`)
        ]
      ]
    });
  }

  public get() : FormGroup {
    return this.validator;
  }
}
