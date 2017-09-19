import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutenticacaoGuardGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router){}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log("Chamando Guard para ",state.url); 
        this.loginService.url = state.url; 
        if (!this.loginService.estaLogado){     
            this.router.navigate(['/login']); 
        } 
        return this.loginService.estaLogado; 
    }
  
}
