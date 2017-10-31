import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cursos:any;

  constructor(private cursoservice: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursoservice.getCursos();
  }

}
