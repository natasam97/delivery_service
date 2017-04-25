import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, RouterState} from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private _router: Router
  ) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
