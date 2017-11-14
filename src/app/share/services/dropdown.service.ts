import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DropdownService {

  constructor(private http: Http) { }

  getEstadoBr(){
      return this.http.get('assets/dados/estadobr.json')
      .map((res: Response) => res.json());
  }

}
