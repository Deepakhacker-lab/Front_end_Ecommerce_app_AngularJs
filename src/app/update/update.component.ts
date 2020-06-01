import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PDetails } from '../welcome/welcome.component';
import { UpdatedataserviceService } from '../service/updatedataservice.service';
import { HardcodedauthService } from '../service/hardcodedauth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Username: any;
  login: boolean=false;
  Details : PDetails;
  id: number;

  constructor(
    private route:ActivatedRoute,
  private update:UpdatedataserviceService,
  private router:Router,
  private hardcod: HardcodedauthService
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
   this.Username=this.hardcod.getUser();
  this.Details= (new PDetails(this.id,'', '', ''));
  if(this.id!=-1){
  this.update.getProducer(this.id).subscribe(
    Response=> this.Details=Response
    
  );
  }
  console.log(this.Details);
  }
 onUpdate(){
  if(this.id!=-1){
    this.update.CreateProducer(this.Details).subscribe(
      data=>this.router.navigate(['welcome', this.Username])
     )
  }
  else{
  this.update.SaveProducer(this.id, this.Details).subscribe(
     data=>this.router.navigate(['welcome', this.Username])
    )}

 }

}
