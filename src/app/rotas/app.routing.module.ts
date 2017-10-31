import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { CursoNaoEncontradoComponent } from './../cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './../cursos/curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './../cursos/cursos.component';
import { LoginComponent } from './../login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: '', component: HomeComponent}
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
