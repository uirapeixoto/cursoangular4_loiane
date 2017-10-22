import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

  title: string = "NgSwith";
  aba: string = 'home';
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
