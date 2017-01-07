import {IModelBase} from "./IModelBase";
export interface IUser extends  IModelBase{
  NOME: string;
  USUARIO: string;
  SENHA: string;
}
