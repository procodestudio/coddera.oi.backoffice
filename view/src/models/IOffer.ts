import {IModelBase} from "./IModelBase";
export interface IOffer extends IModelBase{
  NOME: string;
  EXIBIR: number;
  DESCRICAO: string;
  SCRIPT: string;
  PRECO: number;
  ID_PROGRAMA: string;
  ID_BENEFICIO: string;
}
