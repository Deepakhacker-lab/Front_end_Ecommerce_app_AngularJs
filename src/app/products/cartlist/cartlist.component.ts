import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Productinterface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { error } from 'protractor';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent {

  @Input() prod : Array<Product>=[]; 
   message: any;
   error1 : any;

   @Output() PostEvent = new EventEmitter<string>();
   @Output() PostMessage = new EventEmitter<string>();

  constructor(private route: ActivatedRoute,private router:Router,
    private product:ProductService ) { }

  Navigate(prod :Array<Product>){
  
    this.product.postCart(prod)
    .pipe(
      map(
        (Response: any)=>{
          console.log(Response);
          return Response;
          
        }
      )
    ).subscribe(
      Response=>{
        this.message= Response;
        this.PostEvent.emit("success");
        this.PostMessage.emit(this.message.response);
        this.prod=[];
      },
      error=>{
        this.error1 = error;
        this.PostEvent.emit("error");
        this.PostMessage.emit(this.error1.response);
        console.log(this.error1.response);
      }
    );
  }

  minus(product : Product){

    for( let key of  this.prod){
      
      if(key.unique==product.unique){
        console.log(" deleted key value is " +key.unique);
    this.prod.splice(this.prod.indexOf(key),1); 
      }
    }
  }
}
