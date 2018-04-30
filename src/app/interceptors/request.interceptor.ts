import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).do(evt => {
      const currentUser = localStorage.getItem('currentUser');

      if (currentUser) {
        const token = JSON.parse(currentUser)['token'];

        console.log('Adding the header to the request (token=' + token + ')');

        const authReq = req.clone({
          setHeaders: {
            'wibble': 'wobble',
            'Content-Type': 'application/vnd.api+json',
            'Authorization': 'Bearer ' + token
            }
        });

        return next.handle(authReq);
      } else {
        console.log('Not adding header (no current user)');
        return next.handle(req);
      }
    });
  }
}
