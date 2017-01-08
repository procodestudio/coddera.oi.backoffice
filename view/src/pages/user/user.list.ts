import {Component, ViewEncapsulation} from '@angular/core';
import { Modal, JSNativeModalModule, providers } from 'angular2-modal/plugins/js-native';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BasePageComponent} from "../../components/base-page-component/base-page-component";
import {IError} from "../../models/IError";
import {UserService} from "../../providers/user.service";
import {IUser} from "../../models/IUser";

@Component({
  selector: 'user-list',
  template: require('./user.list.html'),
  providers: [providers],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent extends BasePageComponent{
  items: IUser[];

  constructor(
    private router: Router,
    private toastr: ToastsManager,
    private service: UserService,
    public modal: Modal) {

    super(router, toastr);

    this.isLoading = true;
    this.service.getAll().subscribe(items => {
      this.items = items;
      this.isLoading = false;
    }, error => {
      this.handleError(<IError>error);
    });
  }

  deleteItem(item: IUser, index: number) {
    const dialog = this.modal.confirm()
      .message('Deseja realmente excluir esta oferta?')
      .open();

    dialog.then((resultPromise) => {
      return resultPromise.result.then((result) => {
        this.isLoading = true;
        this.service.delete(item).subscribe(response => {
          this.items.splice(index, 1);
          this.toastr.success('Usuário excluido com sucesso!');
          this.isLoading = false;
        }, error => {
          this.handleError(<IError>error);
          console.log(error);
        });
      }, () => {})
    });
  }

  openItem(item: IUser) {
    this.router.navigate(['/user', item.ID]);
  }
}
