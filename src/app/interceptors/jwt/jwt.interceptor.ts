import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// env
import { environment } from 'src/environments/environment';

// Services
import { SecurityService } from '../../services/security/security.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: SecurityService,
    private router: Router
  ) { }

  /**
   * Agregar en cada petición de salida el token de autenticación
   * @param request HttpRequest<any>
   * @param next HttpHandler
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('access_token');
    const isLoggedIn = this.authenticationService.isAuthenticated();
    if (isLoggedIn) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      if (request.url !== (environment.api + '/posts')) {
        this.router.navigate(['/logout']);
      }
    }
    return next.handle(request);
  }
}
