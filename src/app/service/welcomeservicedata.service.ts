import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { API_URL } from '../app.constant';


@Injectable({
  providedIn: 'root'
})
export class WelcomeservicedataService {
  
  
  constructor(private route:ActivatedRoute ,private http:HttpClient) { }

  
  ServiceHelloDatawithpath(name){

   return this.http.get(`${API_URL}/hello-world/${name}`);
  }

  ServiceSwagger(){
    return this.http.get(`${API_URL}/swagger-ui.html`);
  }

  servicehellodata(){
    return this.http.get("http://localhost:8080/hello-world/");
  }
 
  //http://localhost:8080/hello-world/deepak
  basicauthservice(){
    let username='User';
    let password='User';
    let auth= 'Basic '+ window.btoa(username +':'+password);
    return auth;
  }

}
