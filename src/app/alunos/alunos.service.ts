import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
    { id: 4, nome: 'Aluno 04', email: 'aluno04@email.com' },
  ] ;

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    let alunos = this.getAlunos();
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = alunos[i];

      if (aluno.id == id)
        return aluno
    }
    return null
  }
}
