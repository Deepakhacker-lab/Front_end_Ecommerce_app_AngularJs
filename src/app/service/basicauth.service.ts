import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { API_URL } from '../app.constant';
import { PDetails } from '../welcome/welcome.component';





@Injectable({
  providedIn: 'root'
})
export class BasicauthService {
  redirectUrl: string;
  constructor(private http: HttpClient) { }
 

  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticaterUser');
    return !(user===null)
  }
  logOut(){
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }
  getUser(){
    let user= sessionStorage.getItem('authenticaterUser');
    return user;
  }

  ProducerDataService(){
    return this.http.get<PDetails[]>(`${API_URL}/proc`);
  }
  
  ServiceHelloDatawithpath(name){

    return this.http.get<any>(`${API_URL}/hello-world/${name}`);
    
  }

  ExecutebasicAuthenticationService(Username,Password){

    let auth= 'Basic '+ window.btoa(Username +':'+Password);
    

    let header = new HttpHeaders({
      Authorization: auth
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, 
    {headers: header}).pipe(
      map(
        data=> {
         
          sessionStorage.setItem('authenticaterUser', Username);
          sessionStorage.setItem('Token', auth);
          return data;
        }
      )
    );


  }
  getAuthenticateUser(){
    return sessionStorage.getItem('authenticaterUser');
  }
  getAuthenticatetoken(){
    if(this.getAuthenticateUser())
    return sessionStorage.getItem('Token');
  }

  getAuthenticateRoles(){
    if(this.getAuthenticateUser()){
   
      return sessionStorage.getItem('Role');
    }
  }

  //http://localhost:8080/hello-world/deepak

  ExecutejwtAuthenticationService(username,password){

    

    return this.http.post<any>(`${API_URL}/authenticate`,{
  username,
  password
    }).pipe(
      map(
        data=> {
        
          var texts = data.role.map(function(el) {
            return el.authority;
          });
          sessionStorage.setItem('authenticaterUser', username);
          sessionStorage.setItem('Token', `Bearer ${data.token}`);
          sessionStorage.setItem('Role',texts);
          return data;
        }
      )
    );

  
}
}
export class AuthenticationBean {
    
  constructor(public message:string){}
}
