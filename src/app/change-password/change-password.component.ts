import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private lService:LoginService,private router:Router){}
  password:any
  reEnterPassword:any
  result:Boolean=false
  changePassword(){
    if(this.password==this.reEnterPassword){
      this.lService.changePassword(this.password).subscribe((response)=>{
        this.result=response;
        if(this.result === true){
          Swal.fire({
            title: 'Success',
            text: 'You have successfully changed your password!',
            icon: 'success',
          }).then(()=>{this.router.navigate(["/login"])});
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oh No!',
            text: 'Password change unsuccessful!',
          }).then(()=>{this.router.navigate(["/login"])})
        }
      })
    }

  }

}
