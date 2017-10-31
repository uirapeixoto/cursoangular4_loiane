import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any;

  constructor(private cursoService:CursosService) { 
  }
  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

}
