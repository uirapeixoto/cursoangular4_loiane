import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './../admin/panel/panel.component';
import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
import { AlunosComponent } from '../alunos/alunos.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
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
