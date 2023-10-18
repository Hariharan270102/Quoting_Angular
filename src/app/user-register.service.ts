import { Injectable } from '@angular/core';
import { UserRegister } from './modules/userRegister';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(public http:HttpClient) { }
  url="http://localhost:5050"

  registerUserDb(userRegister:UserRegister):Observable<Boolean>{
    return this.http.post<Boolean>(this.url+"/registerUser",userRegister)
    // .subscribe((response)=>{console.log("Response :"+response)},
    // (error)=>{console.log("Error hi:"+error);
    // }
    // );
  }
}
