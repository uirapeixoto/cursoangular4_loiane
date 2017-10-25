import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CursosModule } from './cursos/cursos.module';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
