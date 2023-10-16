import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  // username:any;
  // password:any;
  constructor() { }

  validateLogin(username: string, password: any) {
    if (username == "admin" && password == "reset@123") {
      return true;
    } else {
      return false;
    }
  }
}
