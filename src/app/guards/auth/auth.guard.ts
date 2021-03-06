import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { SecurityService } from '../../services/security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) { }

  public canActivate(): boolean {
      if (!this.securityService.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }

}
