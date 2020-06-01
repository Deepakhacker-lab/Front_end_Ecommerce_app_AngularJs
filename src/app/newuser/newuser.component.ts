import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  login :logindetails;
  flag: boolean;
  id : number=-1;
  constructor(private router: Router,
    private update: SignupService ) { }

  ngOnInit(): void {
    this.flag= false;
    this.login= (new logindetails(this.id,'', '', '',''));

  }

  onUpdate(){
    this.update.CreateProducer(this.id, this.login).subscribe(
      Response=>{this.router.navigate(['email', {res: Response}]),
      this.flag=true;
      console.log(Response);
    }
     )
  }


}
export class logindetails{

  constructor(public id:number ,
    public username:string,
     public password:string,
     public role:String,
     public email:String){}
  }
