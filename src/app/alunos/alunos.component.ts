import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';

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

  constructor() { }

  ngOnInit() {
  }

}
