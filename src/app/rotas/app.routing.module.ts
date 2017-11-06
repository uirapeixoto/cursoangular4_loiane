import { PaginaNaoEncontradaComponent } from './../pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';

import { AuthGuard } from './../guards/auth.guard';
import { CursoGuard } from './../guards/cusos.guard';
import { AlunoGuard } from './../guards/alunos.guard';

const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: 'app/cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard],
    canActivateChild:[CursoGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: 'app/alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
    //canActivateChild:[AlunoGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
