import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from './user-authentication.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(private _UserAuthenticationService:UserAuthenticationService , private router:Router){};
  watch$ = new Observable<boolean>();
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._UserAuthenticationService.isLoggedIn()==true){
        return true;
      }

      else{
        return this.router.createUrlTree(['login/signup']);
      }
        
  }
  
}


