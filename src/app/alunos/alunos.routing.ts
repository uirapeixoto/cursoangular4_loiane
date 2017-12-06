import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const alunosRoutes = [
  { path: '', component: AlunosComponent, children: [
    { path: 'novo', component: AlunoFormComponent }, // deve estar acima para evitar a colisão de rotas com o alunos/:id
    { path: ':id', component: AlunoDetalheComponent },
    { path: ':id/editar', component: AlunoFormComponent },
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(alunosRoutes)
  ],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
