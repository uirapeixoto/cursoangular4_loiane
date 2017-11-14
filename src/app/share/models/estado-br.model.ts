import { IEstadoBr } from './iestado-br.model';

export class EstadoBr implements IEstadoBr {

  id: number;
  sigla: string;
  nome: string;

  constructor() {}
}
