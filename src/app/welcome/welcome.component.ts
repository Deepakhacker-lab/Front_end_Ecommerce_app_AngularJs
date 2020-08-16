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
  called: boolean=false;
  response: String;
  error: boolean=false;
  
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
  data=> {
    this.message= JSON.parse(JSON.stringify(data)).response;
    this.called=true;
  },
  error=>{
  this.message="Only Admin can access";
  this.error=true;
  }
  );
 
  }
  swagger(){
    this.serverMessage.ServiceSwagger().subscribe(
    data=> {
      this.message= JSON.parse(JSON.stringify(data)).response;
      this.called=true;
    },
    error=>{
    this.message="Only Admin can access";
    this.error=true;
    }
    );
   
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
