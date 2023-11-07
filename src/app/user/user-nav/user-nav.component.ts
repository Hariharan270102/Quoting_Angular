import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/location.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  constructor(private uService:UserService,private route:Router,private locService:LocationService){}
  userEmail:any=localStorage.getItem("userEmail")

  startQuote(){
    console.log('ihekfjvhr')
    this.uService.getProductPlans()
    this.locService.getLocations()
    this.route.navigate(['/view_products'])
  }
  viewQuoting(){
    this.uService.getQuoteDb(this.userEmail)
    this.route.navigate(['/view_quotes'])

  }
  logout(){
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout action here
        // You can redirect to a logout page or trigger a logout function
        Swal.fire("Logged Out", "You have been logged out.", "success").then(()=>{ 
          this.route.navigate(['/logout']);
 
      })
      }
    }); 
  
  }
  myAccount(){
    this.route.navigate(["/my_account"])

  }

}
