import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  id:string;
  emitirCursoId = new EventEmitter<string>();

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }

  setId(id:string){
    this.id = id;
  }

}
