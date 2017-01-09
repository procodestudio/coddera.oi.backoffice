import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, Validator} from '@angular/forms';
import {IUser} from '../../models/IUser';
import { Router, ActivatedRoute } from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BasePageComponent} from "../../components/base-page-component/base-page-component";
import {IError} from "../../models/IError";
import {UserService} from "../../providers/user.service";
import {UserValidator} from "../../validators/user.validator";
import {Md5} from 'ts-md5/dist/md5';
import {PermissionService} from "../../providers/permission.service";

@Component({
  selector: 'user-edit',
  template: require('./user.edit.html')
})
export class UserEditComponent extends BasePageComponent{
  formGroup: FormGroup;
  itemId: string;
  item: IUser;
  private paramSubscribe: any;

  constructor(
    public toastr: ToastsManager,
    private service: UserService,
    private permissionService: PermissionService,
    private userValidator: UserValidator,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    super(router, toastr, permissionService);

    this.paramSubscribe = this.route.params.subscribe(params => {
      this.itemId = params['id'];

      if(this.itemId){
        this.loadItem();
      }else{
        this.item = <IUser>{};
      }
    });

    this.formGroup = userValidator.get();
  }

  loadItem(){
    this.isLoading = true;
    this.service.getOne(this.itemId).subscribe(item => {
      item.SENHA = "";
      this.item = item;
      this.setFormValues(this.item, this.formGroup);
      this.isLoading = false;
    }, error => {
      this.handleError(<IError>error);
      console.log(error);
    });
  }

  saveItem(){
    this.isLoading = true;

    this.item.SENHA = Md5.hashStr(this.item.SENHA).toString();

    if(this.item.ID){
      this.service.save(this.item).subscribe(item => {
        this.toastr.success('Usuário salvo com sucesso!');
        this.goBackToList();
      }, error => {
        this.handleError(<IError>error);
        console.log(error);
      });

    }else{
      this.service.saveNew(this.item).subscribe(user => {
        this.toastr.success('Usuário criado com sucesso!');
        this.goBackToList();
      }, error => {
        this.handleError(<IError>error);
        console.log(error);
      });
    }
  }

  setFormValues(item: IUser , formGroup: FormGroup){
    formGroup.setValue(item, { onlySelf: true });
  }

  goBackToList(){
    this.isLoading = false;
    this.router.navigate(['/user']);
  }
}
