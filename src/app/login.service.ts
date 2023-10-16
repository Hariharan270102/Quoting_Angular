import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from './modules/loginCredentials';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url="http://localhost:5050/registerUser"

 
  getCredentials(credentials:any):Observable<LoginCredentials>{
    console.log("from login service");
    console.log(this.http.get<LoginCredentials>(this.url+'?credentials='+credentials));
    return this.http.get<LoginCredentials>(this.url+'?credentials='+credentials,{responseType:'json'});
    
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
