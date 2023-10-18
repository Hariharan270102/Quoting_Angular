import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private lService:LoginService){}
  password:any
  reEnterPassword:any
  changePassword(){
    if(this.password==this.reEnterPassword){
      this.lService.changePassword(this.password).subscribe()
    }

  }

}
