import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { logindetails } from '../newuser/newuser.component';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  verification(code, url){
     let data = {'code': code};
     const headers = new HttpHeaders ({'Content-Type': 'application/json'});
  return this.http.post(url,JSON.stringify(data), {headers: headers});
  }
 
  CreateProducer(id, detail){
    return this.http.post(`${API_URL}/register`,detail);
  }
}
