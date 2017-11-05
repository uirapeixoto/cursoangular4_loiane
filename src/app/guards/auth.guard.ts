import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './../login/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
      console.log('AuthGuard');
      return this.verificarAcesso();
  }

  private verificarAcesso(){
    if (this.authService.usuarioEstaAutenticado()) {
      
            
            if (this.authService.usuarioEstaAutenticado()) {
              return true;
            }
          }
          this.router.navigate(['/login']);
          return false;
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: verificando se o usuário pode verificar o cod do módulo');
      return this.verificarAcesso();
    }

}
