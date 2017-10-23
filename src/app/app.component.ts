import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular (v2.x e v4.x)';
  aba: string = 'home';
  today: number = Date.now();

  
}
