import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Curso Angular 2/4';
  aba: string = 'home';
  today: number = Date.now();

  
}
