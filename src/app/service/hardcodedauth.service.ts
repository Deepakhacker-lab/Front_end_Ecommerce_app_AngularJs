import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthService {
  redirectUrl: string;
  constructor() { }

  authenticate(Username,Password){
    if(Username==="user" && Password==="user"){
      return true;
    }
    else return false;
  }
  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticaterUser');
    return !(user===null)
  }
  logOut(){
    sessionStorage.removeItem('authenticaterUser');
  }
  getUser(){
    let user= sessionStorage.getItem('authenticaterUser');
    return user;
  }
  
}
