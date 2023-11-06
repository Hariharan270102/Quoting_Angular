import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { GeneralService } from '../general.service';
import { Router } from '@angular/router';
import { NavServiceService } from '../nav-service.service';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2';
import { LoginCredentials } from '../modules/loginCredentials';
import { timeInterval, timer } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   obj:any;
  constructor(public eService:NavServiceService,
    public service:GeneralService,
    public router:Router,
    private loginService:LoginService)
  {}
 
  public username: string = '';
  public password: string = '';

  logingrp=new FormGroup(
    {
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-zA-Z0-9]).{8,}$/)]),
    }
  )
 loginSubmit() {
  
    this.loginService.getCredentials(this.logingrp.get('username')?.value).subscribe(
      data=>{this.obj=data;
      console.log("data");
         
      console.log(data);
      console.log("this.obj");
      
      console.log(this.obj)
      //setting values in local storage
      localStorage.setItem("userLocation",this.obj.state)
      localStorage.setItem("userEmail",this.obj.email)
      localStorage.setItem("userPhonenumber",this.obj.phonenumber)
      localStorage.setItem("userData",this.obj)


      //printing values from local storage
      console.log(localStorage.getItem('userLocation')); // This will print the string representation of the object
      console.log(localStorage.getItem('userEmail'));    
      console.log(localStorage.getItem('userPhonenumber'));    
      console.log(localStorage.getItem('userData'))
 
 
       

      }
    );
    console.log("login details"+this.obj);
    
  if (this.logingrp.valid) {
    const username = this.logingrp.get('username')?.value;
    const password = this.logingrp.get('password')?.value;



    // Check if email and password match admin credentials
    if (username === 'admin@prodapt.com' && password === 'reset@123') {
      // Redirect to admin homepage
      this.router.navigate(['/admin_homepage']);
    } else {
      // Make a call to your service to check if the username exists
      // this.loginService.checkCredentials(username,password).subscribe((result)=>{console.log(result);})
      this.loginService.getCredentials(username).subscribe(
        (data: LoginCredentials) => {
          if (data) {
            // Username exists, check if the password matches
            if (data.password === password) {
              // Password matches, login successful
              Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You have successfully logged in!',
              })
              // You can store user data in localStorage here if needed
              // Redirect to the user homepage
              this.router.navigate(['/user_homepage']);
            } else {
              // Password doesn't match, show an error message
              Swal.fire('Invalid Credentials', 'Password is incorrect, please try again', 'error');
            }
          } else {
            // Username doesn't exist, show a user not found message
            Swal.fire('User Not Found', 'Username does not exist, please try again', 'error');
          }
        },
        (error) => {
          // Handle database error and display an appropriate message
          Swal.fire('Error', 'An error occurred while fetching data from the database. Please try again later.', 'error');
        }
      );
    }
  }
}


}
