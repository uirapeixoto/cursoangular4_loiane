import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';

import { AppComponent } from './app.component';

import { CursosService } from './cursos/cursos.service';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [
    //CursosService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
