import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Constants} from "./constants";
import {PermissionService} from "../providers/permission.service";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Injectable()
export class CanActivateRoutes implements CanActivate {
  constructor(
    private permissionService: PermissionService,
    private router: Router,
    public toastr: ToastsManager
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    var routePath = route.routeConfig.path;

    if(!this.permissionService.isUserLogged()){


      if(routePath.indexOf('login') === -1){
        this.router.navigate(['login', {redirectUrl: routePath}]);
      }

      return true;
    }

    if(routePath === ''){
      return true;
    }

    var urlPermission = Constants.URL_PERMISSION[routePath];
    var userServices = this.permissionService.getLoggedPermission();

    if(userServices.indexOf(urlPermission) === -1){
      this.toastr.success('Você não tem acesso a este recurso!');
      //this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
