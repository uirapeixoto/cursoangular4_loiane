import { CursoGuard } from './guards/cusos.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from './rotas/app.routing.module';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AlunoGuard } from './guards/alunos.guard';

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
    MaterializeModule, 
    AppRoutingModule
  ],
  providers: [
    AuthService, 
    AuthGuard,
    CursoGuard,
    AlunoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
