import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/register') && req.method === 'POST') {
      const mockResponse = new HttpResponse({
        status: 200,
        body: { message: 'Registro exitoso', token: 'fake-jwt-token' },
      });

      return of(mockResponse).pipe(delay(500));
    }

    return next.handle(req);
  }
}
