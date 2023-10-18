import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './nav-bar/welcome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';

import { NavServiceService } from './nav-service.service';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { GeneralService } from './general.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SendOtpComponent } from './send-otp/send-otp.component';
import { ChangePasswordComponent } from './change-password/change-password.component';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    SendOtpComponent,
    ChangePasswordComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,UserRoutingModule,
    AdminModule,AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports:[WelcomeComponent],
  
  providers: [NavServiceService,GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
