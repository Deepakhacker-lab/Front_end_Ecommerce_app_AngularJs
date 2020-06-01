import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  url='';
  private sub: any;
  code :Number=0;
  failed: boolean= false;
  constructor(private route: ActivatedRoute,
    private update: SignupService,
    private router: Router) { }

  ngOnInit(): void {
    this.url= this.route.snapshot.paramMap.get('res');
    console.log("recieved url"+this.url);
  }
  verify(){
    console.log("entered code "+this.code);
    this.update.verification(this.code, this.url).subscribe(
      data=>{this.router.navigate(['login']),
      
      console.log("server response"+data);
    },
    error=>{
    this.failed=true;
    console.log(error);
    }
     )
  }
}
