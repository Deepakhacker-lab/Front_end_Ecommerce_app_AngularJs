import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PDetails } from '../welcome/welcome.component';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class UpdatedataserviceService {

  constructor(private http:HttpClient) { }

  getProducer(id){
  return this.http.get<PDetails>(`${API_URL}/Update/${id}`);

  }
  SaveProducer(id, detail){
    return this.http.put(`${API_URL}/Update/${id}`, detail);
  }
  CreateProducer( detail){
    return this.http.post(`${API_URL}/Update/`, detail);
  
  }
    
}
