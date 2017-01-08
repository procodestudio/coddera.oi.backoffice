import {Component, ViewEncapsulation} from '@angular/core';
import { Modal, JSNativeModalModule, providers } from 'angular2-modal/plugins/js-native';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BasePageComponent} from "../../components/base-page-component/base-page-component";
import {IError} from "../../models/IError";
import {CheckpointService} from "../../providers/checkpoint.service";
import {ICheckpoint} from "../../models/ICheckpoint";

@Component({
  selector: 'checkpoint-list',
  template: require('./checkpoint.list.html'),
  providers: [providers],
  encapsulation: ViewEncapsulation.None
})
export class CheckpointListComponent extends BasePageComponent{
  items: ICheckpoint[];

  constructor(
    private router: Router,
    private toastr: ToastsManager,
    private service: CheckpointService,
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

  deleteItem(item: ICheckpoint, index: number) {
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

  openItem(item: ICheckpoint) {
    this.router.navigate(['/checkpoint', item.ID]);
  }
}
