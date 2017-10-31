import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  id:number;
  pagina:number;
  inscricao:Subscription;
  alunos:any;
  constructor(private route:ActivatedRoute, 
    private router: Router,
    private service: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.queryParams.subscribe(
      (currentPage:any) => {
        this.pagina = currentPage['pagina']
      }
    );

    this.alunos = this.service.getAlunos();

  }

  onDestroy(){
    this.inscricao.unsubscribe();
  }

  avancarPagina(){
    this.router.navigate(['/alunos'],
  {queryParams:
    {'pagina': ++this.pagina},
    });
  }

}
