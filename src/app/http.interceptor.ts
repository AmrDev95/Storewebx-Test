import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';


@Injectable()
export class httpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const idToken = localStorage.getItem('userToken');

    if(idToken){
      const duplicate = request.clone({
        headers:request.headers.set('Authorization' , `Bearer ${idToken}`)
      });

      return next.handle(duplicate);
    }

    else{
      return next.handle(request);
    }
  }
}
