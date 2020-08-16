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
isLoading:boolean=false;
hit=false;
  constructor(private route:Router,
    private hardcoded:HardcodedauthService,
    private basicauth: BasicauthService) { }

  ngOnInit(): void {
  }
   Authjwt(){
    
    this.isLoading=true;
      // if(this.Username==="user" && this.Password==="user")
      this.basicauth.ExecutejwtAuthenticationService(this.Username,this.Password).subscribe(
        data=>{
          console.log(data)
          this.isEnabled=true;  
          this.hit=true;
          this.isLoading=false;
          this.route.navigate(['/welcome', this.basicauth.getAuthenticateUser()]);
        },
        error=>{
          this.isEnabled=false;
          this.isLoading=false;
          this.hit=true;
        }
      )
       
      }

}
