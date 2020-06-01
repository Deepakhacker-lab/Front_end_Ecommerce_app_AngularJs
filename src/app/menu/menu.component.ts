import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { Router } from '@angular/router';

import { PDetails } from '../welcome/welcome.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
isLoggedin: boolean =false;
pdetails: PDetails[];
  constructor(private route:Router,
    public hardcod: HardcodedauthService) { }
user: string='';
  ngOnInit(): void {
    this.user=this.hardcod.getUser();
  
  }
 
  onPress(){
    
    this.route.navigate(['welcome', this.user]);
  }
 

}
