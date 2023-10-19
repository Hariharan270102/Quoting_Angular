import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  userDetails:any;
  userEmail:any
  userPhonenumber:any;
  userLocation:any;
  username:any;

  constructor(public lService:LoginService,){
    this.userEmail=localStorage.getItem("userEmail")

    this.lService.getCredentials(this.userEmail).subscribe((response)=>{
      this.username=response.firstname
      this.userDetails=response;
      this.userPhonenumber=response.phonenumber;
      this.userLocation=response.state;
    })

  }



}
