import {IModelBase} from "./IModelBase";
export interface ICheckpoint extends  IModelBase{
  NOME: string;
  STATUS: string;
  TIME_OUT: number;
}
