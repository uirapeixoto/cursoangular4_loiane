import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';

const appRoutes: Routes = [
  {path:'cursos', loadChildren:'app/cursos/cursos.module#CursosModule'},
  {path:'alunos', loadChildren:'app/alunos/alunos.module#AlunosModule'},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
