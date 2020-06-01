import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { API_URL } from '../app.constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WelcomeservicedataService {
  
  
  constructor(private route:ActivatedRoute ,private http:HttpClient) { }

  servicehellodata(){
    return this.http.get("http://localhost:8080/hello-world/");
  }

  ServiceHelloDatawithpath(name){

    let authenticate=this.basicauthservice();

    let header = new HttpHeaders({
      Authorization: authenticate
    })
   return this.http.get(`${API_URL}/hello-world/${name}`);
  // , {headers: header};
  }
 
  //http://localhost:8080/hello-world/deepak
  basicauthservice(){
    let username='User';
    let password='User';
    let auth= 'Basic '+ window.btoa(username +':'+password);
    return auth;
  }

}
