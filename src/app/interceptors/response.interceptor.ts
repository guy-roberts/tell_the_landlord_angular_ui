import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/index';
import { Router } from '@angular/router';

import 'rxjs/add/operator/do';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.router.navigate(['/login']);
      }
    });
  }
}
