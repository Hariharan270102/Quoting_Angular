import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from './modules/loginCredentials';
import { Observable, timer } from 'rxjs';
import { EmailMessage } from './modules/EmailMessage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url="http://localhost:5050/registerUser"
  check_url="http://localhost:5050/registerUser/check"


  url_email="http://localhost:5678/send-email"

  //testing not used anywhere as now
  // checkCredentials(username:any,password:any):Observable<Boolean>{
  //   console.log("from check credentials method");
  //   return this.http.get<Boolean>(this.check_url+'?username='+username+'?password='+password,{responseType:'json'});
    

  // }
 
  getCredentials(credentials:any):Observable<LoginCredentials>{
    console.log("from login service");
    console.log(this.http.get<LoginCredentials>(this.url+'?credentials='+credentials));
    return this.http.get<LoginCredentials>(this.url+'?credentials='+credentials,{responseType:'json'});
    
  }
  emailMessage:EmailMessage|undefined;
  eMsgReturn:any;
  sendOtp(to:string,subject:string,message:string){
    console.log("from send otp service");

    this.emailMessage = new EmailMessage(to,subject,message,1)
    
    console.log(to);
    console.log(subject);
    console.log(message);
    console.log("emailMessage");
    
    console.log(this.emailMessage);
    
    return this.http.post(this.url_email,this.emailMessage)
    .subscribe((response)=>{
      console.log(response);
      this.eMsgReturn=response
    })
    
  }

  changePassword(password:any){
    console.log("change pwd");
    console.log(this.eMsgReturn);
    
    
    const changeUserCredentials = {

      'user_email':this.eMsgReturn.to,
      'password':password
  
    }
    return this.http.put<Boolean>(this.url,changeUserCredentials)

  }
  

}
