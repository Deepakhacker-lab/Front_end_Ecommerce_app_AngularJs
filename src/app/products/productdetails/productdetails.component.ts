import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../Productinterface';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productselected : Array<Product>= [];

  @Output() cartSelected= new EventEmitter<Array<Product>>();
  
  constructor(private route: ActivatedRoute,private router:Router,
    private product:ProductService ) { }

  ngOnInit(): void {
    
    this.getImage();
   
  }

  flag=false;

retrieveResonse:  Array<Product>=[];
  sucess:boolean=false;

 add(post : Product){
post.bookingQuantity= post.bookingQuantity+1;
}
 minus(post: Product){
   if(post.bookingQuantity>0){
  post.bookingQuantity= post.bookingQuantity-1;
   }
}

AddCart(post : Product){
  let count=0;
  for( let key of  this.productselected){
      
    if(post.unique==key.unique){
      console.log(" inside key value is " +key.unique);
      count=count+1;
      console.log(" inside count value is " +count);
    }
  }
  if(post.bookingQuantity>0){
    if(this.productselected[0]==null && this.flag==false){
      this.productselected.push(post);
      this.flag=true;
    }
    else if(count==0){
      this.productselected.push(post);
    }
    }

this.cartSelected.emit(this.productselected);


}

    getImage() {
    
        this.product.getProduct()
        .pipe(
          map(
            (Response : Product)=>{
              const arr= [];
              for(let key in Response){
                if(Response.hasOwnProperty(key)){
                Response[key].bookingQuantity=0;
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
                this.retrieveResonse.push(data[i]);
              }
              this.sucess=true;
              console.log(this.retrieveResonse);
            },
            error=>{
              console.log("Failed"+error);
            }
          );
    
    }

}
