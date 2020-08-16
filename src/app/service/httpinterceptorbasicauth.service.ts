import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { BasicauthService } from './basicauth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorbasicauthService implements HttpInterceptor{

  constructor(private basicauth: BasicauthService) { }


  intercept(req: HttpRequest<any>, 
  next: HttpHandler) : Observable<HttpEvent<any>> {
   
    let auth= this.basicauth.getAuthenticatetoken();
    let username= this.basicauth.getAuthenticateUser();
; 

    if(auth && username){req = req.clone({
      setHeaders : {
       Authorization: auth

      }
    })
 }
 return next.handle(req);
    
  }
}
