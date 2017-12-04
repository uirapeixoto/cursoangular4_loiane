import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any;
  pagina: number;
  proximaPagina: number;
  inscricao: Subscription;

  constructor(private cursoService: CursosService) { }
  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }
}
