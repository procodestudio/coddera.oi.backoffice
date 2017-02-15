import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {IError} from "../../models/IError";
import {PermissionService} from "../../providers/permission.service";
import {Constants} from "../../app/constants";
import {ViewContainerRef} from "@angular/core";

export class BasePageComponent {
  isLoading: boolean = false;

  constructor(
    private _router: Router,
    private _toastr: ToastsManager,
    private _permissionService: PermissionService,
    private _vRef: ViewContainerRef
  ) {
    this._toastr.setRootViewContainerRef(_vRef);
  }

  checkDeletePermission(moduleName: string){
    var deletePermission = Constants.DELETE_PERMISSION[moduleName];
    var loggedPermissions = this._permissionService.getLoggedPermission();
    return loggedPermissions.indexOf(deletePermission) !== -1
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
