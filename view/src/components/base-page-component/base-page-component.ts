import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {IError} from "../../models/IError";

export class BasePageComponent {
  isLoading: boolean = false;

  constructor(
    private _router: Router,
    private _toastr: ToastsManager
  ) {
  }

  handleError(error: IError) {
    this._toastr.error(error.message);

    if(error.redirect){
      var route = this._router.url;

      if(route.indexOf('login') !== -1){
        this._router.navigate(['login']);
      }else{
        this._router.navigate(['login', {redirectUrl: route}]);
      }
    }

    this.isLoading = false;
  }

  public isNullOrUndefined(value: string){
    return (value != '' && value != undefined);
  }
}
