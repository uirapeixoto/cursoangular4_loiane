import { AlunosService } from './alunos.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { RouterModule } from '@angular/router/src/router_module';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  id: number;
  pagina: number;
  inscricao: Subscription;
  alunos: any;

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
