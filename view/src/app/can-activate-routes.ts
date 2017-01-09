import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Constants} from "./constants";
import {PermissionService} from "../providers/permission.service";

@Injectable()
export class CanActivateRoutes implements CanActivate {
  constructor(private permissionService: PermissionService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    if(!this.permissionService.isUserLogged()){
      var routeUrl = state.url;

      if(routeUrl.indexOf('login') === -1){
        this.router.navigate(['login', {redirectUrl: routeUrl}]);
      }
      
      return true;
    }

    var urlPermission = Constants.URL_PERMISSION[route.routeConfig.path];
    var userServices = this.permissionService.getLoggedPermission();

    return userServices.indexOf(urlPermission) !== -1;
  }
}
