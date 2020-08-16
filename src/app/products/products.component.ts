import { Component, OnInit } from '@angular/core';
import { Product } from './Productinterface';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
    this.isdisable =true;
    
  }

  isdisable : boolean;
  productadded : Array<Product>=[];

  postedEvent: string;

  message: string;
}
