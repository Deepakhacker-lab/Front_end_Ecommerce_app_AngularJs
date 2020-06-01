import { Component, OnInit } from '@angular/core';
import { HardcodedauthService } from '../service/hardcodedauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
user:boolean=false;
  constructor(private route:Router,
    private harded:HardcodedauthService) { }

  ngOnInit(): void {
    this.harded.logOut();
  }
 
  }

