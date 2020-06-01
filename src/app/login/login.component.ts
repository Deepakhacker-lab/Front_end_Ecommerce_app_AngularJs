import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { BasicauthService } from '../service/basicauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Username: string='';
Password: string='';
isEnabled=false;
hit=false;
  constructor(private route:Router,
    private hardcoded:HardcodedauthService,
    private basicauth: BasicauthService) { }

  ngOnInit(): void {
  }
  onClick(){
    
  // if(this.Username==="user" && this.Password==="user")
  if(this.hardcoded.authenticate(this.Username,this.Password)){
    sessionStorage.setItem('authenticaterUser',this.Username);
  this.isEnabled=true;
  this.hit=true;
  this.route.navigate(['welcome', this.Username]);
  }
  else{
    this.isEnabled=false;
    this.hit=true;
  }
  }

  AuthBasic(){
    
    // if(this.Username==="user" && this.Password==="user")
    this.basicauth.ExecutebasicAuthenticationService(this.Username,this.Password).subscribe(
      data=>{
        console.log(data)
        this.isEnabled=true;
        this.hit=true;
        this.route.navigate(['welcome', this.Username]);
      },
      error=>{
        console.log(error)
        this.isEnabled=false;
        this.hit=true;
      }
    )
     
    }
    Authjwt(){
    
      // if(this.Username==="user" && this.Password==="user")
      this.basicauth.ExecutejwtAuthenticationService(this.Username,this.Password).subscribe(
        data=>{
          console.log(data)
          this.isEnabled=true;  
          this.hit=true;
          this.route.navigate(['welcome', this.Username]);
        },
        error=>{
          this.isEnabled=false;
          this.hit=true;
        }
      )
       
      }

}
