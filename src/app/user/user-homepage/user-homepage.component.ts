import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { WelcomeComponent } from 'src/app/nav-bar/welcome.component';



@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent {
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
