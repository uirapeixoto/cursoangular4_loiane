import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './../login/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
    if (this.authService.usuarioEstaAutenticado()) {

      console.log('AuthGuard');
      if (this.authService.usuarioEstaAutenticado()) {
        return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }

}
