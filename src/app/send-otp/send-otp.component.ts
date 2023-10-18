import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.css']
})
export class SendOtpComponent {

  otp:any
  returnEmailMessage:any;
  constructor(private lService:LoginService,private router:Router){}

  checkOtp(){
    console.log("entered otp");
    
    console.log(this.otp);
    this.returnEmailMessage=this.lService.eMsgReturn
    console.log("returnEmailMessage");
    console.log(this.returnEmailMessage);

    if(this.returnEmailMessage.otp==this.otp){
      
      this.router.navigate(["/change_password"]);

      // Swal.fire("hi correct otp")
    }
    else{
      Swal.fire("wrong otp").then(()=>{
        this.router.navigate(["/send_otp"])
      })
    }
    
  }

}
