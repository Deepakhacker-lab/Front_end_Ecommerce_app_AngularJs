import { Component, Injectable} from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicauthService } from '../service/basicauth.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { ProductService } from '../service/product.service';
import { ProductDetails } from './ProductUploadInterface'; 
import { map, catchError } from 'rxjs/operators';
import { error } from 'protractor';
import { API_URL } from '../app.constant';


@Component({
  selector: 'app-productupload',
  templateUrl: './productupload.component.html',
  styleUrls: ['./productupload.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ProductuploadComponent  {
  imageName: string;
  products: ProductDetails;
  image: string | ArrayBuffer;
  uploadedImage: any;

  constructor(private httpClient: HttpClient,private router: Router,
     private product: ProductService,
     private auth: BasicauthService,
     private route: ActivatedRoute,private ng2ImgMax: Ng2ImgMaxService) { }

  name:string;
  block:boolean=true;
  selectedFile: File; 
  message: any;
  hit: boolean=false;
  isEnabled:boolean=false;
  Upload :boolean =false;
  percentage: any;
  ngOnInit(): void {

  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    this.ng2ImgMax.resizeImage(this.selectedFile, 400, 300).subscribe(
      result => {
        this.uploadedImage = result;
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
  }

  onUpload(post : ProductDetails) {
    console.log(this.uploadedImage);
    this.Upload=true;
    console.log(post);
  let data : FormData= new FormData();

  data.append('file', this.uploadedImage, this.uploadedImage.name);
  data.append('info', new Blob([JSON.stringify(post)],
  {type: "application/json"}
  ));
  this.hit=true;
  console.log(data);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post(`${API_URL}/products/add`, data )
    .pipe(
      map(
        (Response: any)=>{
          console.log(Response);
          return Response;
        }
      )
    )
    .subscribe(
      event => {
        
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          this.percentage = Math.round(100 * event.loaded / event.total);
          console.log(`File is ${this.percentage}% uploaded.`);
        } else if (data instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
        this.message = event;
      this.isEnabled=true;
       },
       error =>{
         this.isEnabled=true;
        this.message=error;
       }
    

    );
  }

  
  // if(this.message==='Successful'){
  //   this.isEnabled=true;
  //     }else{
  //       this.isEnabled=false;  
  //     }
      
  //    }
  


}
