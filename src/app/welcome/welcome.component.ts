import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeservicedataService } from '../service/welcomeservicedata.service';
import { DeletedataserviceService } from '../service/deletedataservice.service';

import { BasicauthService } from '../service/basicauth.service';

export class PDetails{
  constructor(public id:number ,
    public firstName:string,
     public lastName:string,
     public email:String){}
  }

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
Username='';
message='';
Details : PDetails[];
// =[
//   new PDetails('Deepak','Sai','Sai@hotmail.com'),
//   new PDetails('vignesh','war','war@hotmail.com'),
//   new PDetails('Sai','Manoj','Manoj@hotmail.com'),
// ];
  called: boolean;
  response: String;
  error: boolean;
  
  //activate route
  constructor(private route: ActivatedRoute,
    private serverMessage: WelcomeservicedataService,
    private deletedate: DeletedataserviceService,
    private router:Router,
    private basicauth:BasicauthService
    ) { }

  
  ngOnInit(): void {
   
  this.Username=this.route.snapshot.params['name'];
  console.log(this.Username);
  if(this.Username!==''){
    this.message="Sucessfully logged in";
  }
  this.RefreshProducerlist();
  }
  // Message(){
  // console.log(this.serverMessage.servicehellodata().subscribe(
  // Response=> this.handlesuccessServer(Response),
  // error=> this.HandleErrorMessage(error)
  
  // ));
  // }

RefreshProducerlist(){
  this.basicauth.ProducerDataService().subscribe(
    Response=> {
      console.log(Response);
      this.Details=Response;
    }
  );
}

  Message(){
  this.serverMessage.ServiceHelloDatawithpath(this.Username).subscribe(
  Response=> {this.handlesuccessServer(Response)
  },
  error=>{this.HandleErrorMessage(error)
  }
  );
 
  }

  

  HandleErrorMessage(error) {
    this.error=true;
    console.log("Error console"+error);
    this.response=error.error.message;
  }

  handlesuccessServer(Response){
  console.log("Success handler"+Response);
  this.response=JSON.parse(Response.message);
  this.called=true;
  }

  onDelete(id: number){
    this.deletedate.DeleteDataService(id).subscribe(
    Response=> {this.message=`${id} is successfully deleted`;
    this.RefreshProducerlist();}
    );
    
  }
  onUpdate(id : number){
  this.router.navigate(["update", id]);  
  console.log(this.router.navigate(["update", id]));
  }
  onAdd(){
    this.router.navigate(["update", -1]);
  }
 
 

}
