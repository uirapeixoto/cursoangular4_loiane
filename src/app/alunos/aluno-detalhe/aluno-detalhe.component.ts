import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from './../alunos.service';
import { Aluno } from './../Aluno';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})

export class AlunoDetalheComponent implements OnInit, OnDestroy {


  id: number;
  inscricao: Subscription;
  aluno: Aluno;

  constructor
  (
    private alunoService: AlunosService,
    private route: ActivatedRoute,
    private service: AlunosService,
    private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit: AlunoDestalheComponent');

    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.aluno = this.alunoService.getAluno(this.id);
    });

  }

  editar() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
