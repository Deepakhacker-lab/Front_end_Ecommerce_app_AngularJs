import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { logindetails } from './NewUserInterface';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  flag: boolean;
  failedFlag: boolean;
  valid: boolean;
  id : number=-1;
  message: string;
  constructor(private router: Router,
    private update: SignupService ) { }

  ngOnInit(): void {
    this.failedFlag=true;
  this.valid=true;
  }

  onUpdate(post : logindetails){
    this.update.CreateProducer(this.id, post).subscribe(
      Response=>{this.router.navigate(['email', {res: Response}]),
      this.flag=true;
      console.log(Response);
    },
    error=>{
      this.failedFlag=true;
      this.message="Failed";
    }
     )
  }
}
