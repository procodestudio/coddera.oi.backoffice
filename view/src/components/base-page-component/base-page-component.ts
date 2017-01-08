import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {IError} from "../../models/IError";

export class BasePageComponent {
  isLoading: boolean = false;

  constructor(
    private _router: Router,
    private _toastr: ToastsManager) {
  }

  handleError(error: IError) {
    this._toastr.error(error.message);

    if(error.redirect){
      this._router.navigate(['login']);
    }

    this.isLoading = false;
  }

  public isNullOrUndefined(value: string){
    return (value != '' && value != undefined);
  }
}
