import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
  public validate:boolean=false
  public validateAdmin:boolean=true



  // private isAuthenticated = false;

  // // Simulate login
  // login() {
  //   this.isAuthenticated = true;
  // }

  // // Simulate logout
  // logout() {
  //   this.isAuthenticated = false;
  // }

  // // Check if the user is authenticated
  // isLoggedIn() {
  //   return this.isAuthenticated;
  // }
  

  constructor() { }
}
