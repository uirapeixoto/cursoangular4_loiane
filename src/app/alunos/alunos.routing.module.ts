import { NgModule } from '@angular/core';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunoGuard } from './../guards/alunos.guard';
import { AlunosDeactivateGuard } from './../guards/alunos.deactivate.guard';

const alunosRoutes = [
 {path:'', component: AlunosComponent, 
    canActivateChild: [AlunoGuard],
    children : [
      {path: 'novo', component: AlunoFormComponent},
      {path: ':id', component: AlunoDetalheComponent
      },
      {path: ':id/editar', component: AlunoFormComponent,
          canDeactivate: [AlunosDeactivateGuard]
      }
 ]},
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule],
  })

  export class AlunosRoutingModule { }
