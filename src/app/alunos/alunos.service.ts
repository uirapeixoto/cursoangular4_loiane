import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  alunos: any;

  constructor() { }

  getAlunos() {
    return [
      { id: 1, nome: 'Aluno 01' },
      { id: 2, nome: 'Aluno 02' },
      { id: 3, nome: 'Aluno 03' },
      { id: 4, nome: 'Aluno 04' },
    ]
  }

  getAluno(id: number) {
    let alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i];

      if (aluno.id == id)
        return aluno
    }
    return null
  }
}
