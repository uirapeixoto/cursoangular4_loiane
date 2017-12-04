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
  pagina:number;
  proximaPagina: number;
  inscricao: Subscription;

  constructor(
    private cursoService:CursosService, 
    private route: ActivatedRoute,
    private router: Router) { 
  }
  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (currentPage: any) => {
        this.pagina = currentPage['pagina'];
    });
  }

  onDestroy(){
    this.inscricao.unsubscribe();
  }

  avancarPagina(){
    //this.pagina++;
    this.router.navigate(['/cursos'],
  {queryParams:
    {'pagina': ++this.pagina},
    });
  }

}