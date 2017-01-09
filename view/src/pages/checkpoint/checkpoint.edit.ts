import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, Validator} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {BasePageComponent} from "../../components/base-page-component/base-page-component";
import {IError} from "../../models/IError";
import {ICheckpoint} from "../../models/ICheckpoint";
import {CheckpointService} from "../../providers/checkpoint.service";
import {CheckpointValidator} from "../../validators/checkpoint.validator";
import {PermissionService} from "../../providers/permission.service";

@Component({
  selector: 'checkpoint-edit',
  template: require('./checkpoint.edit.html')
})
export class CheckpointEditComponent extends BasePageComponent{
  formGroup: FormGroup;
  itemId: string;
  item: ICheckpoint;
  private paramSubscribe: any;

  constructor(
    public toastr: ToastsManager,
    private service: CheckpointService,
    private permissionService: PermissionService,
    private userValidator: CheckpointValidator,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    super(router, toastr, permissionService);

    this.paramSubscribe = this.route.params.subscribe(params => {
      this.itemId = params['id'];

      if(this.itemId){
        this.loadItem();
      }else{
        this.item = <ICheckpoint>{};
      }
    });

    this.formGroup = userValidator.get();
  }

  loadItem(){
    this.isLoading = true;
    this.service.getOne(this.itemId).subscribe(item => {
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

    if(this.item.ID){
      this.service.save(this.item).subscribe( checkpoint => {
        this.toastr.success('Checkpoint salvo com sucesso!');
        this.goBackToList();
      }, error => {
        this.handleError(<IError>error);
        console.log(error);
      });

    }else{
      this.service.saveNew(this.item).subscribe( checkpoint => {
        this.toastr.success('Checkpoint criado com sucesso!');
        this.goBackToList();
      }, error => {
        this.handleError(<IError>error);
        console.log(error);
      });
    }
  }

  setFormValues(item: ICheckpoint , formGroup: FormGroup){
    formGroup.setValue(item, { onlySelf: true });
  }

  goBackToList(){
    this.isLoading = false;
    this.router.navigate(['/checkpoint']);
  }
}
