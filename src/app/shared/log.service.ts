import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  consolelog(msg: string){
    console.log(msg)
  }

}
