import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { IFormCanDeactivate } from './IForm-camdeactivate';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

    canDeactivate(component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {

        console.log('guarda de desativação');
        //return !component.formMudou;

        return component.podeDesativar();

    }
}
