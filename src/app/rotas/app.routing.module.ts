import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
  },
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