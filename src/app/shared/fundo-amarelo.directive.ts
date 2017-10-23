import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  //selector: '[fundoAmarelo]'
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef:ElementRef,
    private _rederer: Renderer
  ) {
    //console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    /*
    Não é aconselhado utilizar o elemento DOM diretamente pois isso caracteriza falha
    de segurança como por exemplo ataque de XSS que são ataques de Cross-site Scripting
    leia mais em http://www.redesegura.com.br/2012/01/saiba-mais-sobre-o-cross-site-scripting-xss/
    */ 
    this._rederer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
   }

}
