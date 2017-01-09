import {Component, ViewEncapsulation} from '@angular/core';
import { Modal, JSNativeModalModule, providers } from 'angular2-modal/plugins/js-native';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BasePageComponent} from "../../components/base-page-component/base-page-component";
import {IError} from "../../models/IError";
import {UserService} from "../../providers/user.service";
import {IUser} from "../../models/IUser";
import {PermissionService} from "../../providers/permission.service";
import {IPermission} from "../../models/IPermission";
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'permission-user',
  template: require('./permission-user.html'),
  providers: [providers],
  encapsulation: ViewEncapsulation.None
})
export class PermissionComponent extends BasePageComponent{
  permissions: IPermission[];
  userPermissions: string[];
  userId: number;
  private paramSubscribe: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastsManager,
    private permissionService: PermissionService,
    private userService: UserService,
    public modal: Modal) {

    super(router, toastr, permissionService);

    this.paramSubscribe = this.route.params.subscribe(params => {
      var self = this;
      self.userId = params['userId'];

      self.isLoading = true;

      Observable.forkJoin(
        self.permissionService.getAll(),
        self.userService.userPermissions(self.userId)
      ).subscribe(response => {
        self.permissions = response[0];
        self.userPermissions = response[1];

        if(self.userPermissions && self.userPermissions.length > 0){
          self.permissions.forEach(function(permission){
            permission.checked = self.userPermissions.indexOf(permission.CODIGO) !== -1;
          });
        }
        self.isLoading = false;
      }, error => {
        self.handleError(<IError>error);
      });
    });
  }

  togglePermission(event, permission) {
    if(event.target.checked){
      this.addPermission(permission);
    }else{
      this.removePermission(permission);
    }
  }

  addPermission(permission: IPermission){
    this.isLoading = true;
    this.permissionService.addPermission(permission, this.userId).subscribe(response => {
      this.toastr.success('Permissão adicionada!');
      this.isLoading = false;
    }, error => {
      permission.checked = false;
      this.handleError(<IError>error);
    });
  }

  removePermission(permission: IPermission){
    this.isLoading = true;
    this.permissionService.removePermission(permission, this.userId).subscribe(response => {
      this.toastr.success('Permissão removida!');
      this.isLoading = false;
    }, error => {
      permission.checked = true;
      this.handleError(<IError>error);
    });
  }
}
