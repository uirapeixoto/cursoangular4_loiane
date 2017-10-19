import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = "http://loiane.com";
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/200/200/nature/';
  valorAtual:string = '';
  valorSalvo:string = '';
  isMouseOver:boolean = false;

  nomeDoCurso: string = 'Angular';
  valorInicial = 15;
  valor: any = 5;
  
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual =(<HTMLInputElement>evento.target).value; 
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit() {
  }

}
