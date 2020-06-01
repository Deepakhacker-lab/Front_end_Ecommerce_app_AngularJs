import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BasicauthService } from './basicauth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorbasicauthService implements HttpInterceptor{

  constructor(private basicauth: BasicauthService) { }
  intercept(req: HttpRequest<any>, 
  next: HttpHandler){
   
    let auth= this.basicauth.getAuthenticatetoken();
    let username= this.basicauth.getAuthenticateUser();

    if(auth && username){req = req.clone({
      setHeaders : {
      BEARERAuthorization: auth
      }
    })
 }
 return next.handle(req);
    
  }
}
