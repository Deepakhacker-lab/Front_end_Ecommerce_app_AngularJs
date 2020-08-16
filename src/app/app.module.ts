import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HardcodedauthService } from './service/hardcodedauth.service';
import { LogoutComponent } from './logout/logout.component';
import { Directivebg } from './directive-bg/directive';
import { BetterDirectiveDirective } from './directive-bg/better-directive.directive';
import {  HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UpdateComponent } from './update/update.component';
import { HttpinterceptorbasicauthService } from './service/httpinterceptorbasicauth.service';



import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment';
import { TimeoutComponent } from './timeout/timeout.component';
import { NewuserComponent } from './newuser/newuser.component';
import { EmailComponent } from './email/email.component';
import { ProductsComponent } from './products/products.component';
import { ProductuploadComponent } from './productupload/productupload.component';

import { Ng2ImgMaxModule } from 'ng2-img-max';
import { CartComponent } from './Cart/cart.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { CartlistComponent } from './products/cartlist/cartlist.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    Directivebg,
    BetterDirectiveDirective,
    UpdateComponent,
    TimeoutComponent,
    NewuserComponent,
    EmailComponent,
    ProductsComponent,
    ProductuploadComponent,
    CartComponent,
    ProductdetailsComponent,
    CartlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    Ng2ImgMaxModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorbasicauthService, multi:true},
 
    HardcodedauthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
