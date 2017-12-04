import { CursoNaoEncontradoComponent } from './../cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { PanelComponent } from './../admin/panel/panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
import { CursosComponent } from '../cursos/cursos.component';
import { AlunosComponent } from '../alunos/alunos.component';
import { CursoDetalheComponent } from './../cursos/curso-detalhe/curso-detalhe.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: 'alunos', component: AlunosComponent },
  { path: 'admin', component: PanelComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
