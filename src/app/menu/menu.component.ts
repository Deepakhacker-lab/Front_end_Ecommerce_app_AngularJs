import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { Router } from '@angular/router';

import { PDetails } from '../welcome/welcome.component';
import { BasicauthService } from '../service/basicauth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
isLoggedin: boolean =false;
pdetails: PDetails[];



  constructor(private route:Router,
    public hardcod: HardcodedauthService,private basicauth: BasicauthService) { }
user: string='';
  ngOnInit(): void {
    this.user=this.hardcod.getUser();
     
  }

  isdisabled(){
    let role =this.basicauth.getAuthenticateRoles()
    if(role==='ADMIN'){
     
      
      return true;
    }
    };
 
  onPress(){
    
    this.route.navigate(['welcome', this.user]);
  }
 

}
