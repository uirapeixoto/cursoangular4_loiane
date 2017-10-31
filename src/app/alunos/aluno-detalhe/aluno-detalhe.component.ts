import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})

export class AlunoDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  aluno: any;
  constructor
  (private route: ActivatedRoute, 
    private service: AlunosService,
    private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        this.id = params['id'];
        this.aluno = this.service.getAluno(this.id);

        if(this.aluno == null){
          this.aluno = {
              id: 0,
              nome: 'Aluno não encontrado' 
          }
        }

      }
    );
  }

}