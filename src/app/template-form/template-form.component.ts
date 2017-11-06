import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario:any = {
    nome:'Uirá Peixoto',
    email:'uira.peixoto@gmail.com'
  }

  onSubmit(form){
    console.log(form.value);
    console.log(this.usuario);
  }

  constructor() { }

  ngOnInit() {
  }

}
