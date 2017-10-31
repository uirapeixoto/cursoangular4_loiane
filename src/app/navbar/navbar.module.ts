import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { routing } from './../app.routing';

import { CursosService } from './../cursos/cursos.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    NavbarComponent
  ],
  exports:[
    NavbarComponent
  ],
  providers:[
    CursosService
  ]
})
export class NavbarModule { }
