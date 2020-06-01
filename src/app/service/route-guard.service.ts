import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { HardcodedauthService } from './hardcodedauth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router:Router,
    private hardcodedauthService: HardcodedauthService) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (this.hardcodedauthService.isUserLoggedIn())
      return true;
    else 
    this.router.navigate(['/login']);
    return false;
  }
  
 
}
