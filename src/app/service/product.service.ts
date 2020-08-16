import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constant';
import { Product } from '../products/Productinterface';

export class ProductDetails{
   

  constructor(public  name:string,
    public unique:number,
    public price:number,
    public availableQuantity:number,
    public picBytes: File) { }
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProduct(){
  return this.http.get<Product>(`${API_URL}/products/getallproducts`);

  }

  postCart(cartItems){
    return this.http.post<Product>(`${API_URL}/products/add/cart`, cartItems);
  
    }

    getListofCart(){
      return this.http.get<Product>(`${API_URL}/products/getallproducts/cart`);
    }
}
