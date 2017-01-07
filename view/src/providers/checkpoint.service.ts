import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {IService} from "./IService";
import {ICheckpoint} from "../models/ICheckpoint";

@Injectable()
export class CheckpointService extends IService<ICheckpoint> {
  constructor(public http: Http) {
    super(http, 'checkpoint');
  }
}
