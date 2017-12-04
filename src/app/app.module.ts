import { SidebarModule } from './components/sidebar/sidebar.module';
import { AppRoutingModule } from './rotas/app.routing.module';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavbarModule } from './navbar/navbar.module';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminModule } from './admin/admin.module';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    SidebarModule,
    MaterializeModule,
    AdminModule,
    CursosModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
