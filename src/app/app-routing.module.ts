import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { UpdateComponent } from './update/update.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { NewuserComponent } from './newuser/newuser.component';
import { EmailComponent } from './email/email.component';



const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService] },
  {path: 'logout', component:LogoutComponent,  canActivate:[RouteGuardService]},
  {path: 'update/:id', component:UpdateComponent, canActivate:[RouteGuardService]  },
  {path: 'timeout', component:TimeoutComponent, canActivate:[RouteGuardService]},
  {path : 'newuser', component:NewuserComponent},
  {path : 'email', component:EmailComponent},
  {path: '**', component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
