import { NgModule } from '@angular/core';
import { RouterModule, CanActivateChild, CanDeactivate, Resolve } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunoGuard } from './../guards/alunos.guard';
import { AlunosDeactivateGuard } from './../guards/alunos.deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
 {path:'', component: AlunosComponent, 
    canActivateChild: [AlunoGuard],
    children : [
      {path: 'novo', component: AlunoFormComponent},
      {path: ':id', component: AlunoDetalheComponent,
        resolve: { aluno : AlunoDetalheResolver}
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
