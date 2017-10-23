import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customomizadas',
  templateUrl: './diretivas-customomizadas.component.html',
  styleUrls: ['./diretivas-customomizadas.component.css']
})
export class DiretivasCustomomizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
