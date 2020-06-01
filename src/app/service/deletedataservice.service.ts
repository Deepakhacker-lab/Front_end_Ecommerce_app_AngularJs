import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class DeletedataserviceService {

  constructor(private http:HttpClient) { }

  DeleteDataService(id){
    return this.http.delete(`${API_URL}/proc/${id}`);
  }
}
