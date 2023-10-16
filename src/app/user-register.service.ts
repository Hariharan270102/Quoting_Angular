import { Injectable } from '@angular/core';
import { UserRegister } from './modules/userRegister';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(public http:HttpClient) { }
  url="http://localhost:5050"

  registerUserDb(userRegister:UserRegister){
    return this.http.post<any>(this.url+"/registerUser",userRegister).subscribe((response)=>{console.log("Response :"+response)},
    (error)=>{console.log("Error hi:"+error);
    }
    );
  }
}
