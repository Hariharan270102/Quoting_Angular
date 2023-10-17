import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  obj:any;
  username:any;
  umail:any
  constructor(public router:Router,public uService:UserService,public lService:LoginService){}

  forgotPasswordGrp=new FormGroup({
    username: new FormControl('',[Validators.required])
  })

  forgotPwd(){
    console.log("from forgot pwd method");
    
    this.username=this.forgotPasswordGrp.get("username")?.value
    this.lService.getCredentials(this.forgotPasswordGrp.get('username')?.value).subscribe(
      data=>{this.obj=data;
        console.log(data);
        localStorage.setItem("userEmail",data.email)
        localStorage.setItem("userPhonenumber",data.phonenumber)
        console.log(localStorage.getItem("userEmail"));


        this.umail=localStorage.getItem("userEmail");
        console.log(this.umail);
          this.checkCredentials(this.umail);
        // timer(2000).subscribe(()=>{
          
          
        // })
        
        
        
      console.log(this.obj);
      localStorage.setItem("forgotCredentials",JSON.stringify(this.obj))
      })
    
  }

  checkCredentials(umail:any){    
    console.log("umail in fun");
    console.log(umail);
    
    
    

    if(this.username==localStorage.getItem("userEmail") || this.username==localStorage.getItem("userPhonenumber")){
      console.log("success");

      this.lService.sendOtp(umail,"Recover Password Otp","Your Otp is ")
      
      this.router.navigate(['/send_otp']);
    }
    else{
      Swal.fire("Username not found!").then(()=>{this.router.navigate(['/login'])})
    }
     

  }

}
