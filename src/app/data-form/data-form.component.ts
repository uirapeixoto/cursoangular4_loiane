import { EstadoBr } from './../share/models/estado-br.model';
import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DropdownService } from './../share/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoBr[];

  constructor(
    private dropdownService: DropdownService,
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {

    this.dropdownService.getEstadoBr()
    .subscribe(dados => {
      this.estados = dados;
      console.log('mostrando os dados\n');
      console.log(dados);
    });
    /*      this.formulario = new FormGroup({
          nome: new FormControl(null),
          email: new FormControl(null),
          endereco: new FormGroup({
            cep: new FormControl(null)
          })
        }); */

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    //console.log(this.formulario);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(dados => {
          console.log(dados);
          //reseta o form
          //this.formulario.reset();
          //this.resetar();
        },
        (error: any) => alert('erro')
        );
    } else {
      //console.log('formulario inválido');
        this.verificaValidacoesForm(this.formulario);

    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors)
      return campoEmail.errors['email'] && (campoEmail.touched || campoEmail.dirty);
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    var validacep = /^[0-9]{8}$/;
    if (cep != "") {
      if (validacep.test(cep)) {

        this.resetarDadosForm();

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => this.popularDados(dados));

      }
    }
  }


  popularDados(dados) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    //this.formulario.get('nome').setValue('Fulano de tal');
  }

  resetarDadosForm() {
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }



}
