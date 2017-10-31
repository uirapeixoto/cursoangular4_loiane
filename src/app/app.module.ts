import { AlunosModule } from './alunos/alunos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CursosModule } from './cursos/cursos.module';
import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from './rotas/app.routing.module';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    CursosModule,
    AlunosModule,
    MaterializeModule, 
    AppRoutingModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
