import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { Product } from '../products/Productinterface';
import { ProductService } from '../service/product.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Array<Product>=[];

  constructor(private product: ProductService, ) { }

  retrieveResponse:  Array<Product>=[];
  
  success:boolean=false;
  ngOnInit(): void {
this.getListofCart();
    
  }

  getListofCart() {
    
    this.product.getListofCart()
    .pipe(
      map(
        (Response : Product)=>{
          const arr= [];
          for(let key in Response){
            if(Response.hasOwnProperty(key)){

            arr.push(Response[key]);
          }
        }
        
        return arr;
        }
      )
     )
      .subscribe(
        data => {
          //this.retrieveResonse = JSON.parse(JSON.stringify(data)); 
          for(let i in data){
            this.retrieveResponse.push(data[i]);
          }
          this.success=true;
          console.log(this.retrieveResponse);
        },
        error=>{
          console.log("Failed"+error);
        }
      );

}


}
