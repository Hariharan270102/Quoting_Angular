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

  url_email="http://localhost:5678/send-email"

 
  getCredentials(credentials:any):Observable<LoginCredentials>{
    console.log("from login service");
    console.log(this.http.get<LoginCredentials>(this.url+'?credentials='+credentials));
    return this.http.get<LoginCredentials>(this.url+'?credentials='+credentials,{responseType:'json'});
    
  }
  emailMessage:EmailMessage|undefined;
  sendOtp(to:string,subject:string,message:string){
    console.log("from send otp service");

    this.emailMessage = new EmailMessage(to,subject,message)
    
    console.log(to);
    console.log(subject);
    console.log(message);
    console.log("emailMessage");
    
    console.log(this.emailMessage);
    
    return this.http.post(this.url_email,this.emailMessage).subscribe()
    
    
    

  }

 // getCredentials(credentials:any){
  //   console.log("from login service");
    
  //   return this.http.get<LoginCredentials>(this.url+'?credentials='+credentials).subscribe((response:LoginCredentials)=>{
  //   console.log(response)
  //   },
  //   (error)=>{
  //     console.log("Error"+error);
  //   }
      
  //   )
    
  // }

  

}
