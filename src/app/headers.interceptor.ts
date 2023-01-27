import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { StudentsService } from './students.service';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    // const API_key='test123';
    const student=this.injector.get(StudentsService)
   const req=request.clone({
    setHeaders:{
      Authorization:`Bearer ${student.getToken()}`
          // API_key
    }
   })

    return next.handle(req);
  }
}
